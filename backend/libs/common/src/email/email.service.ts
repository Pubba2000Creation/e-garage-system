import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

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
}
