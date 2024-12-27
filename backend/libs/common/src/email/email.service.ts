import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EmailService {
  private readonly transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      secure: false, // For STARTTLS
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    });
  }

  private loadTemplate(templateName: string, variables: Record<string, string>): string {
    const templatePath = path.join(
      __dirname,
      '../../../libs/common/src/email/template',
      `${templateName}.html`,
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template ${templateName} not found`);
    }

    let template = fs.readFileSync(templatePath, 'utf8');
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, value);
    }
    return template;
  }

  async sendEmail(to: string, subject: string, text: string, html?: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: this.configService.get<string>('EMAIL_FROM'),
        to,
        subject,
        text,
        html,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  async sendOTP(to: string, otp: string): Promise<void> {
    const subject = 'Your OTP Code';
    const html = this.loadTemplate('otp', { otp });
    await this.sendEmail(to, subject, `Your OTP is: ${otp}`, html);
  }

  async resetPassword(to: string, resetLink: string): Promise<void> {
    const subject = 'Reset Your Password';
    const html = this.loadTemplate('reset-password', { resetLink });
    await this.sendEmail(to, subject, 'Reset your password using the link provided.', html);
  }

  async forgotPassword(to: string, resetLink: string): Promise<void> {
    const subject = 'Forgot Password Assistance';
    const html = this.loadTemplate('forgot-password', { resetLink });
    await this.sendEmail(to, subject, 'Reset your password using the link provided.', html);
  }
}
