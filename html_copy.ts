import { mailingImagesServerFolder } from '@helpers';

export function html(
  colorMode: boolean,
  titleLine1: string,
  titleLine2: string,
  titleLine3: string,
  date: string,
  imageSrc: string
) {
  let currImgSrc = imageSrc;
  currImgSrc = 'https://crossoverfix.github.io/vtbmailimg/images/mail_02_header_bg.jpg';
  let fontSiz = '39px';
  if (
    (titleLine1 && !titleLine2 && !titleLine3) ||
    (!titleLine1 && titleLine2 && !titleLine3) ||
    (!titleLine1 && !titleLine2 && titleLine3)
  ) {
    fontSiz = '39px';
  } else if (
    (titleLine1 && titleLine2 && !titleLine3) ||
    (titleLine1 && !titleLine2 && titleLine3) ||
    (!titleLine1 && titleLine2 && titleLine3)
  ) {
    fontSiz = '32px';
  } else if (titleLine2 && titleLine3 && titleLine1) {
    fontSiz = '26px';
  }
  let returnVal: string;
  returnVal = `
<style>
.header{
font-family: Arial;
max-width: 600px; 
width: 600px;
height: 200px;
margin: 0 auto;
}
</style>
<tr>
 		<td style="max-width:600px;width:600px;height:200px;background: url('${currImgSrc}')	no-repeat center center;background-size: cover;" bgcolor="#E3F6FF" class="header" valign="top" width="600px">
      <!--[if gte mso 9]>
      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
        <v:fill type="tile" src="https://crossoverfix.github.io/vtbmailimg/images/mail_02_header_bg.jpg" color="#E3F6FF" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->
      <div>
			<table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto; padding: 0; max-width: 600px; width: 100%;height: 100%;" class="header"   >
				<tbody style="height: 200px;max-width: 600px">
					<tr valign="top" align="right" style="height: 90px;width: 100%;max-width: 600px;">
						<td style="width: 10%;margin-left: auto"></td>
						<td style="width: 100%;margin-left: auto;margin-right: auto"></td>
						<td style="padding-top: 23px;padding-right: 30px">`;

  if (!colorMode) {
    returnVal += `
						<img
							alt="logo"
							src="${mailingImagesServerFolder}vtb_logo_blue.png"
							height="36"
							width="100"
							border="0"
							style="display: block"
						/>`;
  } else {
    returnVal += `<img
	  alt="logo"
	  src="${mailingImagesServerFolder}vtb_logo_white.png"
	  height="36"
	  width="100"
	  border="0"
	  style="display: block"
  />`;
  }
  returnVal += `
						</td>
				</tr>
				<tr valign="top" align="left" style="width: 100%;height: 40px;max-width: 600px;">
					<td style="padding-left: 30px;">`;
  if (!colorMode) {
    returnVal += `
						<p
							style="margin-top: 0;margin-bottom: 0;font-family: Arial;font-size: ${fontSiz};font-weight: 600;color: #002882;padding-bottom: 5px;background: url('${mailingImagesServerFolder}blue_underline.png') bottom left no-repeat ;background-size: 100% 4px;text-transform: uppercase"
						>
							<span style="white-space: nowrap;display: block;">${titleLine1}</span>`;
    if (titleLine2) {
      returnVal += `<span style="white-space: nowrap;display: block;">${titleLine2}</span>`;
    }
    if (titleLine3) {
      returnVal += `<span style="white-space: nowrap;display: block;">${titleLine3}</span>`;
    }
    returnVal += `
						</p>`;
  } else {
    returnVal += `
						<p
							style="margin-top: 0;margin-bottom: 0;font-family: Arial;font-size: ${fontSiz};font-weight: 600;color: #ffffff;padding-bottom: 5px;background: url('${mailingImagesServerFolder}blue_underline.png') bottom left no-repeat ;background-size: 100% 4px;text-transform: uppercase"
						>
						<span style="white-space: nowrap;display: block;">${titleLine1}</span>`;
    if (titleLine2) {
      returnVal += `<span style="white-space: nowrap;display: block;">${titleLine2}</span>`;
    }
    if (titleLine3) {
      returnVal += `<span style="white-space: nowrap;display: block;">${titleLine3}</span>`;
    }
    returnVal += `
						</p>`;
  }
  returnVal += `
					</td>
					<td
						style="width: 18px;margin-right: auto;background: url('${mailingImagesServerFolder}blue_slash.png')	no-repeat left bottom;background-size: 18px 100%;"
					>
						<p style="margin: 0;height: 40px;width: 17px;padding-bottom: 5px"></p>
					</td>
					<td style="margin-right: auto;width: 100%;max-width: 600px;"></td>
					</tr>
					
				<tr style="margin-bottom: auto;width: 100%;height: auto;max-width: 600px;">
				<td style="padding-left: 30px;">
				`;
  if (!colorMode) {
    returnVal += `
						<p
				style="margin-top: 0;margin-bottom: 0;font-family: Arial;font-size: 16px;font-weight: 400;color: #002882;text-transform: uppercase"
			>
				${date}
			</p>`;
  } else {
    returnVal += `
						<p
				style="margin-top: 0;margin-bottom: 0;font-family: Arial;font-size: 16px;font-weight: 400;color: #FFFFFF;text-transform: uppercase"
			>
				${date}
			</p>`;
  }
  returnVal += `
				
			</td>
			</tr>
				</tbody>
			</table>
		      </div>
      <!--[if gte mso 9]>
        </v:textbox>
      </v:rect>
      <![endif]-->
    </td>
	</tr>`;

  return returnVal;
  // tslint:enable:max-line-length
}

