import React, { useState } from 'react';
import {  Drawer } from 'antd';
import NotificationBtn from './notificationBtn';
import AlertBox from './alertBox';


export default function NotificationsDrawer(props:{count:number}) {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NotificationBtn fun={showDrawer} count={props.count} />
      <Drawer title="Notifications" onClose={onClose} open={open}>
        {/* notification list */}
        <div className=''>

            <AlertBox title="Hello there!" description="This is a notification message." time='1 day' type='error' href='/' />
            <AlertBox title="Hello there!" description="This is a notification message." time='1 day' type='default' />
            <AlertBox title="Hello there!" description="This is a notification message." time='1 day' type='success' />
            <AlertBox title="Hello there!" description="This is a notification message." time='1 day' type='info' />
            <AlertBox title="Hello there!" description="This is a notification message." time='1 day' type='warning' />
            
        </div>              
      </Drawer>
    </>
  );
};






