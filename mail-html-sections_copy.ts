// tslint:disable:max-line-length

import { mailingHost } from 'shared';

export const mailHtmlPrefix = `<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      html,
      body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
        margin: 0;
        padding: 0;
      }
      body {
        width: 100% !important;
        padding: 0;
      }
    </style>
  </head>
  <body
    bgcolor="#E6E6E6"
    style="padding: 0; Margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; text-size-adjust: none; background-color: #E6E6E6;"
  >
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#E6E6E6" style="background-color: #E6E6E6;">
      <tbody>
        <tr>
          <td align="center" valign="top" bgcolor="#E6E6E6" style="background-color: #E6E6E6;">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              style="margin: 0 auto; padding: 0; max-width: 600px; width: 100%;position: relative"
            >
              <tbody>`;

export function mailHtmlSuffix(urlPrefix, mailingId) {
  return `</tbody></table></td></tr></tbody></table>
<img src="${mailingHost}/_vti_bin/Djems.VTB.SharePoint/Distributions.svc/distributions/${mailingId}/picture"/>
</body></html>`;
}
// tslint:enable:max-line-length
