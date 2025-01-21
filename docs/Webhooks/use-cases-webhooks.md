---
title: 'Use cases: Webhooks'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
What can you do with Webhooks?
Organize in two parts: 
difference = developing for yourself vs. developing for your customers

You can update your applicatinos with ScheduleOnce booking data
send it to your calendar, if you have a calendar
If you have a CRM you can add to customer profiles

Direct users
Who is it for?
Direct end-users can take it and integrate it with their apps, SaaS or otherwise (up to programers to integrate)

SaaS vendors who wants to give functionality to end users
Honeybook
[block:api-header]
{
  "title": "Integrate ScheduleOnce with your application"
}
[/block]
You can easily integrate ScheduleOnce with the applications that you use in your business – such as a CRM or email marketing app – using our Webhooks API. Below are some tips and common use case examples to help you make the most out of ScheduleOnce's robust Webhooks integration. [Learn more about how to set up Webhook subscriptions for your ScheduleOnce account](https://developers.scheduleonce.com/docs/using-webhooks) 
[block:api-header]
{
  "title": "Choosing the right event triggers"
}
[/block]
When setting up a Webhook subscription on your account, you can choose to set **specific event triggers** that send notifications to your application whenever a specific type of booking event occurs (e.g. a booking is canceled), or a **composite event trigger** that sends notifications for all booking lifecycle events. [Learn more about booking lifecycle event triggers](https://developers.scheduleonce.com/docs/webhook-event-triggers) 

**When should you use specific vs. composite event triggers?**

If you use ScheduleOnce in combination with email marketing and marketing automation campaigns, 
you may want to use specific event triggers to target certain users based on their level of engagement and interaction with your campaign. If you want to analyze your ScheduleOnce booking activity using productivity apps such as Google Sheets, Evernote, or Slack, you may want to use a composite event trigger to track all your booking activity. 

Below are some examples of common use cases that show how you can integrate ScheduleOnce with SaaS applications using our Webhooks API to improve your business processes.
[block:api-header]
{
  "title": "Use case: Updating your application with ScheduleOnce booking data"
}
[/block]
You can use Webhooks to streamline the scheduling experience for Users within your own application environment. By integrating ScheduleOnce with your application, your Users can simply send [personalized ScheduleOnce booking links](https://developers.scheduleonce.com/v2.0.0/docs/send-data-to-scheduleonce-via-url-parameters) to prospective customers, and automatically store and display all corresponding booking and meeting information within your own application. This integration will simply the workflow for your Users and provide a streamlined experience for your Customers.


Display updated booking information in a custom calendar view to logged-in Users.

Customers log into User's application, see SO booking page, make a booking, 

Booking info is sent to Webhook
User gets info via webhook, saves it in database, then can present it in a calendar or stream to logged-in users inside their own application.

Here’s how it works:
Simply share your custom Calendly link on your website, marketing materials, emails, or include it in any HoneyBook messages with a single click.

Once successfully connected, your Calendly availability automatically blocks out any event dates or meetings you already have. Just make sure you choose your HoneyBook calendar or your synced Google calendar as your primary calendar in your Calendly account.

Your clients will be able to easily select an available time to connect with you, and all corresponding communication and meetings will be automatically stored in HoneyBook—simplifying things for you and creating a streamlined experience for your clients. 

as long as your account is connected to HoneyBook, all corresponding communication and meetings will be automatically stored in HoneyBook, simplifying things for you and creating a streamlined experience for your clients.

Use your Calendly link to enable your clients to schedule a time to connect with you. You can use it for both in person or phone meetings. You can customize the prompts, language, event names and duration and more. 

 
A few of our favorite use cases: mini sessions with clients, discovery calls, business coaching and mentoring sessions. 

 
Mini sessions: Share your Calendly link on your mini session marketing materials allowing new clients to select an available time and easily create a new project for that client.
[block:api-header]
{
  "title": "Use case: Analyze booking behavior"
}
[/block]
Create a booking log for analyzing booking behavior that tracks all booking lifecycle events. monitoriing or reporting purposes

Track all booking information in your own application's reporting tool, coordinate with other date (i.e. User data) in your reporting tool. So you don't have to check reports in many different applications. Centralize reporting using Webhooks. (ask suzie for example tools)

Example: Repost data to your application's API
Process the data and repost it using your application's API.
[block:api-header]
{
  "title": "Use case: Create new records in a CRM"
}
[/block]
One of the most common use cases of the ScheduleOnce Webhooks API integration is to create a new lead or contact record in a CRM whenever a booking is made. To set up a Webhook thet lets you create a new lead in a CRM, you will need to create a Webhook subscription configured with the `booking.scheduled` event trigger. Once you have set up the subscription, you will receive booking data to your specified URL endpoint each time a new booking is scheduled in your ScheduleOnce account:

It can be a lead, opportunity, contact, booking activity, event...
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/83f44cd-Screen_Shot_2018-04-01_at_4.33.30_PM.png",
        "Screen Shot 2018-04-01 at 4.33.30 PM.png",
        2874,
        426,
        "#ededed"
      ]
    }
  ]
}
[/block]
Example: Create a new Customer record in a help desk app 
Create a new Customer record in a help desk app whenever a booking is made.
[block:api-header]
{
  "title": "Use case: Trigger a targeted email marketing campaign"
}
[/block]
If you use an email marketing application, you have probably already identified opportunities for sending targeted campaigns to specific customer segments. You can use our Webhooks API to integrate ScheduleOnce with your email marketing campaigns, letting you automatically send targeted campaigns at specific moments in the booking lifecycle. For example, you can set up a Webhook subscription that will automatically trigger a retargeting campaign whenever a Customer misses or cancels a booking. Simply configure a Webhook subscription with the `booking.no_show` and `booking.canceled` event triggers, and automatically send out your designated email campaign every time a scheduled appointment is missed or canceled.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/72d503b-Screen_Shot_2018-04-02_at_8.17.17_AM.png",
        "Screen Shot 2018-04-02 at 8.17.17 AM.png",
        2872,
        838,
        "#e9e9e9"
      ]
    }
  ]
}
[/block]
Example: Send follow-up materials
The campaign could send out a survey, a questionnaire or even an invitation to book another meeting. You can also send out a feedback form as soon as the meeting ends (the booking status changes to Completed).

diagram

Example: Send onboarding materials
Send onboarding materials whenever a new booking is made.

diagram