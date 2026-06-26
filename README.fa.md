# اسکریپت گوگل WPTelegram

> **📚 این راهنما به زبان [انگلیسی](README.md) نیز در دسترس است.**

شما می‌توانید از این اسکریپت برای دور زدن محدودیت‌های اعمال‌شده بر API تلگرام توسط میزبان‌های مختلف استفاده کنید. کافی است درخواست را به جای API ربات تلگرام، به این اسکریپت ارسال کنید پس از اینکه آن را به عنوان یک برنامه وب مستقر کرده و دسترسی ناشناس را مجاز کرده‌اید.

## پارامترها

این اسکریپت درخواست‌های GET و POST را با پارامترهای زیر می‌پذیرد:

| نام            | نوع        | توضیحات                                                                      |
|----------------|------------|------------------------------------------------------------------------------|
| `bot_token`    | رشته       | توکن ربات تلگرام                                                           |
| `method`       | رشته       | نام متد API ربات تلگرام، به عنوان مثال `sendMessage`                        |
| `args`         | شیء JSON   | آرگومان‌ها/پارامترهای متد API، به عنوان مثال `{"chat_id":"123","text":"HelloWorld"}` |

## نحوه استقرار

### تصاویر را در [پایین 👇](#screenshots) ببینید

- به [script.google.com](https://script.google.com) بروید و در صورت نیاز وارد حساب کاربری خود شوید.
- یک پروژه جدید ایجاد کنید و نامی که دوست دارید برای آن انتخاب کنید :)
- باید یک فایل (به طور پیش‌فرض Code.gs) باز شود. محتوای این فایل را حذف کنید.
- محتوای [**wptelegram-google-script.gs**](https://gist.github.com/manzoorwanijk/ee9ed032caedf2bb0c83dea73bc9a28e#file-wptelegram-google-script-gs) را کپی کرده و در فایل پروژه (Code.gs) جای‌گذاری کنید.
- روی *ذخیره* (💾) کلیک کنید یا `Ctrl+S` را فشار دهید.
- روی *"استقرار"* (Deploy) در بالای صفحه کلیک کنید و *"استقرار جدید"* (New deployment) را انتخاب کنید تا یک پنجره باز شود.
- در پنجره بازشده، روی "انتخاب نوع" ⚙️ کلیک کنید و *"برنامه وب"* (Web app) را انتخاب کنید.
- در بخش *"برنامه وب"*، برای *اجرا به عنوان*، گزینه *"من (<ایمیل شما>)"* را انتخاب کنید **[مهم]**.
- در بخش *"چه کسانی دسترسی دارند"*، گزینه *"همه"* (Anyone) را انتخاب کنید **[مهم]**.
- روی *"استقرار"* (Deploy) کلیک کنید تا کادر مجوز باز شود.
- روی *"مجوز دسترسی"* (Authorize access) کلیک کنید تا اسکریپت مجاز شود.
- در پنجره بازشده، حساب گوگل خود را انتخاب کنید.
- اگر هشداری با عنوان "گوگل این برنامه را تأیید نکرده است" مشاهده کردید، مشکلی نیست؛ روی *"پیشرفته"* (Advanced) کلیک کنید و گزینه *"رفتن به <نام برنامه> (ناامن)"* را انتخاب کنید.
- در صفحه بعدی، روی *"اجازه"* (Allow) کلیک کنید.
- پس از هدایت مجدد، باید پیام *"استقرار با موفقیت به‌روزرسانی شد"* را ببینید.
- *"آدرس وب برنامه"* (Web app URL) را کپی کرده و در اپلیکیشن یا افزونه خود جای‌گذاری کنید.

---

<a name="screenshots"></a>
## تصاویر مراحل استقرار

![image](https://user-images.githubusercontent.com/18226415/117548278-b9254880-b051-11eb-887b-ed2098b06d5a.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548319-f4277c00-b051-11eb-8a1d-bdfb96f0c776.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548327-02759800-b052-11eb-8bfc-02fd000fdcfc.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548340-1c16df80-b052-11eb-882a-6a07b801637b.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548354-305adc80-b052-11eb-8097-ad94755406f0.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548366-45377000-b052-11eb-8854-da2ab8fed6ce.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548379-55e7e600-b052-11eb-8fd4-8e76e5516845.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548401-70ba5a80-b052-11eb-88f6-d7cde6e7ce0b.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548421-816ad080-b052-11eb-92f7-97ef11c62fa4.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548430-8f205600-b052-11eb-98b0-2731109ae37f.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548443-9e9f9f00-b052-11eb-9abe-0b9dcd654b2d.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548448-ac552480-b052-11eb-91de-65cf08b76b0c.png)

<hr />

![image](https://user-images.githubusercontent.com/18226415/117548458-c7c02f80-b052-11eb-8cc4-40e9d109a565.png)
