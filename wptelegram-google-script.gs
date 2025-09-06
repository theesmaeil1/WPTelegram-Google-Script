// Telegram API Proxy Script
// Creator: MeTi (@Metiwilson - https://t.me/Metiwilson)
// Founder & Programmer @iNoevi

function doGet(e) {
  try {
    if (!e) throw new Error('No parameters provided');
    return requestHandler(e);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    if (!e) throw new Error('No parameters provided');
    return requestHandler(e);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function requestHandler(e) {
  try {
    const response = handleRequest(e);
    return ContentService
      .createTextOutput(response)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleRequest(e) {
  // Validate required parameters
  if (!e.parameter.bot_token) {
    throw new Error('Bot token is required');
  }
  if (!e.parameter.method) {
    throw new Error('Method name is required');
  }

  const botToken = e.parameter.bot_token;
  const tgMethod = e.parameter.method;

  // Configure HTTP request options
  const options = {
    method: 'post',
    muteHttpExceptions: true,
    contentType: 'application/json'
  };

  // Add payload if args are provided
  if (e.parameter.args) {
    try {
      options.payload = JSON.parse(e.parameter.args);
    } catch (error) {
      throw new Error('Invalid args format: ' + error.message);
    }
  }

  // Make API request to Telegram
  const response = UrlFetchApp.fetch(
    `https://api.telegram.org/bot${botToken}/${tgMethod}`,
    options
  );

  // Check HTTP response code
  const responseCode = response.getResponseCode();
  if (responseCode !== 200) {
    throw new Error(`Telegram API error: HTTP ${responseCode}`);
  }

  return response.getContentText();
}
