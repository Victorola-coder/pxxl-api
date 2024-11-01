const contentEmail = function (name, content) {
    const html = `
    <!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <title>Some Random Email</title>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
    rel="stylesheet" media="screen">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
		.social-media-icon {
			display: inline-block;
			margin: 10px;
			font-size: 30px;
			color: #333;
		}
		.facebook-icon {
			color: #3b5998;
		}
		.twitter-icon {
			color: #1da1f2;
		}
		.instagram-icon {
			color: #e4405f;
		}
		.tiktok-icon {
			color: #69c9d0;
		}
    .hover-underline:hover {
      text-decoration: underline !important;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {

      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: .5;
      }
    }

    @keyframes bounce {

      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    @media (max-width: 600px) {
      .sm-px-24 {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }

      .sm-py-32 {
        padding-top: 32px !important;
        padding-bottom: 32px !important;
      }

      .sm-w-full {
        width: 100% !important;
      }
    }
  </style>
</head>

<body
  style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; --bg-opacity: 1; background-color: #eceff1;">
  <div style="display: none;">Welcome To Flowday Appt</div>
  <div role="article" aria-roledescription="email" aria-label="Reset your Password" lang="en">
    <table style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; width: 100%;" width="100%"
      cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center"
          style="--bg-opacity: 1; background-color: #eceff1; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
          <table class="sm-w-full" style="font-family: 'Montserrat',Arial,sans-serif; width: 600px;" width="600"
            cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="sm-py-32 sm-px-24"
                style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; padding: 48px; text-align: center;"
                align="center">
                <img class="logo" src="https://res.cloudinary.com/dldd0rczy/image/upload/v1679776248/Flowday_Logo_Main_tz1lyj.png" height="50" width="200" alt="Flowday logo">
              </td>
            </tr>
            <tr>
              <td align="center" class="sm-px-24" style="font-family: 'Montserrat',Arial,sans-serif;">
                <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%" cellpadding="0"
                  cellspacing="0" role="presentation">
                  <tr>
                    <td class="sm-px-24"
                      style="--bg-opacity: 1; background-color: #ffffff; border-radius: 4px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #626262;"
                      align="left">

                      <p style="font-weight: 600; font-size: 18px; margin-bottom: 10px;margin-top: 10px">Hello ${name},</p>

                      <p style="margin: 0 0 24px;">
                      ${content}
                      </p>
                      
                      <p style="margin: 0 0 24px;">
                      
                      With Flowday, you can quickly buy USDT using your favorite payment methods and enjoy fast transaction processing times. 
                      You can also send USDT/USDC to anyone, anywhere in the world, with just a few clicks. 
                      Our platform supports USDT/USDC transfers to and from any compatible wallet, making it easy to manage your digital assets on the go.
                      
                      </p>
                      <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
                        cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td
                            style="font-family: 'Montserrat',Arial,sans-serif; padding-top: 32px; padding-bottom: 32px; text-align: center;">
                            <div style="--bg-opacity: 1; background-color: #eceff1; height: 1px; line-height: 1px;">
                              &zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 0 0 16px; text-align: center; font-weight: bold; font-size: 18px;">
                      Thank you for Signing For Joining Our Waitlist!</br>
                      If you have any questions or need help getting started, please don't
                      hesitate to reach out to us.
                      </p>
                      </br>
                      <p style="text-align: center;">
                      Email: <a href="mailto:support@afrifans.com" class="hover-underline"
                          style="--text-opacity: 1; color: #7367f0; text-decoration: none;">support@afrifans.com</a>.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-family: 'Montserrat',Arial,sans-serif; height: 20px;" height="20"></td>
                  </tr>
                  <tr>
                    <td style="font-family: 'Montserrat',Arial,sans-serif; height: 16px;" height="16"></td>
                  </tr>
                </table>


                	<a href="https://www.facebook.com"><i class="fa fa-facebook social-media-icon facebook-icon"></i></a>
	                <a href="https://www.twitter.com"><i class="fa fa-twitter social-media-icon twitter-icon"></i></a>
	                <a href="https://www.instagram.com"><i class="fa fa-instagram social-media-icon instagram-icon"></i></a>
	                <a href="https://www.tiktok.com"><i class="fa fa-tiktok social-media-icon tiktok-icon"></i></a>
                  </br> 
                  <p style="font-weight: 600; font-size: 18px; margin-bottom: 0;">
                  <center> &copy; 2023 Afrifans LLC. All rights reserved.
                  <br />
                  Abuja, Nigeria.</center></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>

</html>`;
    const text = `
        Welcome and thank you for joining our waitlist:
        ${name}

If you did not requested a password reset, please ignore this email or reply to let us know. This password reset is only valid for the next 2 hours.`;
    return {
        html: html,
        text: text,
    };
};

module.exports = contentEmail;