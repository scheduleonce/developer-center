---
title: Exporting and Deleting Contacts
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
When a visitor schedules a meeting, filling out a routing form, or a engages with a chatbot, OnceHub creates a contact record for them, associated with all their activities.

## How Do I Export Contacts?

The contact is identified in the OnceHub UI through their email address, if this is known for them (as it would be for all bookings and for some chatbot conversations). On the backend, every contact also has a contact ID assigned to them.

With a [list of all contacts](https://developers.oncehub.com/reference/list-all-contacts), you can export your contacts and move them to your internal CRM or database.

If you need information about a specific contact, you can filter the list by a specific email.

## How Do I Delete Contacts?

Once you have that contact's record, you can copy their ID and use the OnceHub Developer Center's UI to [delete that contact](https://developers.oncehub.com/reference/delete-a-contact).\
Click the **Try it** button and you'll be able to enter the ID. Once it's deleted, you'll receive confirmation the deletion was successful.

We recommend you delete their contact record before [deleting their activities](https://help.oncehub.com/help/deleting-an-activity) within the OnceHub app. If you only delete bookings within OnceHub, the contact record stays behind in the system, though this is not accessible through the UI. In order to comply fully for a [GDPR data deletion request](https://help.oncehub.com/help/gdpr-data-deletion-request), it is important to take direct action and delete that contact's record as well.