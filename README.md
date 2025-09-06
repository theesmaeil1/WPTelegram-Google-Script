WPTelegram Google Script
English
Overview
The WPTelegram Google Script allows you to bypass restrictions on the Telegram Bot API by routing requests through a Google Apps Script deployed as a web app. This script acts as a proxy, enabling seamless interaction with the Telegram Bot API even in restricted environments. Simply deploy the script, allow anonymous access, and send requests to the provided web app URL instead of the Telegram Bot API directly.
Parameters
The script supports both GET and POST requests with the following parameters:



Name
Type
Description



bot_token
String
The Telegram Bot Token.


method
String
Telegram Bot API method name (e.g., sendMessage).


args
JSON Object
The arguments/parameters for the API method (e.g., {"chat_id":"123","text":"HelloWorld"}).


How to Deploy
Follow these steps to deploy the script as a web app:

Go to script.google.com and sign in if prompted.
Create a new project and give it a name of your choice.
The editor will open a default file (e.g., Code.gs). Delete its contents.
Copy the contents of wptelegram-google-script.gs (available in this repository) and paste them into the Code.gs file.
Save the project by clicking the save icon (💾) or pressing Ctrl+S.
Click Deploy at the top, then select New deployment.
In the popup, click Select type (⚙️) and choose Web app.
Under Execute as, select Me () (important).
Under Who has access, select Anyone (important).
Click Deploy to open the Authorization box.
Click Authorize access and select your Google Account.
If a warning appears ("Google hasn't verified this app"), click Advanced, then Go to  (unsafe).
On the next screen, click Allow.
After deployment, you should see "Deployment successfully updated."
Copy the Web app URL and use it in your application or plugin to send requests.

Usage
Once deployed, send your Telegram Bot API requests to the web app URL instead of the Telegram API endpoint. Ensure the request includes the required parameters (bot_token, method, and args) as described above.

فارسی
معرفی
اسکریپت WPTelegram Google به شما امکان می‌دهد محدودیت‌های اعمال‌شده بر API ربات تلگرام را با استفاده از Google Apps Script به‌عنوان یک وب‌اپلیکیشن دور بزنید. این اسکریپت به‌عنوان یک پراکسی عمل می‌کند و امکان تعامل بدون مشکل با API ربات تلگرام را حتی در محیط‌های محدود فراهم می‌سازد. کافی است اسکریپت را مستقر کنید، دسترسی ناشناس را فعال کنید و درخواست‌ها را به URL وب‌اپلیکیشن ارسال کنید.
پارامترها
این اسکریپت از درخواست‌های GET و POST با پارامترهای زیر پشتیبانی می‌کند:



نام
نوع
توضیحات



bot_token
رشته
توکن ربات تلگرام.


method
رشته
نام متد API ربات تلگرام (مثال: sendMessage).


args
شیء JSON
آرگومان‌ها/پارامترهای متد API (مثال: {"chat_id":"123","text":"HelloWorld"}).


نحوه استقرار
برای استقرار اسکریپت به‌عنوان یک وب‌اپلیکیشن، مراحل زیر را دنبال کنید:

به script.google.com بروید و در صورت نیاز وارد حساب کاربری خود شوید.
یک پروژه جدید ایجاد کنید و نامی دلخواه برای آن انتخاب کنید.
ویرایشگر به‌صورت پیش‌فرض یک فایل (مانند Code.gs) باز می‌کند. محتوای این فایل را حذف کنید.
محتوای فایل wptelegram-google-script.gs (موجود در این مخزن) را کپی کرده و در فایل Code.gs جای‌گذاری کنید.
پروژه را با کلیک بر روی آیکون ذخیره (💾) یا فشردن Ctrl+S ذخیره کنید.
بر روی Deploy در بالای صفحه کلیک کنید و گزینه New deployment را انتخاب کنید.
در پنجره بازشده، روی Select type (⚙️) کلیک کرده و Web app را انتخاب کنید.
در بخش Execute as، گزینه Me (<ایمیل شما>) را انتخاب کنید (مهم).
در بخش Who has access، گزینه Anyone را انتخاب کنید (مهم).
بر روی Deploy کلیک کنید تا کادر مجوز ظاهر شود.
روی Authorize access کلیک کنید و حساب گوگل خود را انتخاب کنید.
اگر هشداری با مضمون "Google hasn't verified this app" مشاهده کردید، روی Advanced کلیک کنید و سپس Go to <نام اپلیکیشن> (unsafe) را انتخاب کنید.
در صفحه بعدی، روی Allow کلیک کنید.
پس از استقرار، پیام "Deployment successfully updated" را مشاهده خواهید کرد.
URL وب‌اپلیکیشن را کپی کنید و در اپلیکیشن یا افزونه خود برای ارسال درخواست‌ها استفاده کنید.

نحوه استفاده
پس از استقرار، درخواست‌های API ربات تلگرام خود را به‌جای نقطه پایانی API تلگرام، به URL وب‌اپلیکیشن ارسال کنید. مطمئن شوید که درخواست شامل پارامترهای موردنیاز (bot_token، method و args) به‌صورت شرح داده‌شده است.
