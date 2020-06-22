import React from "react";
import "./share.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Share = ({ text, printDocument }) => {
  return (
    <div className="icons">
      <i className="fas fa-download icon" onClick={printDocument}></i>
      <FacebookShareButton
        className="icon"
        url={"www.naijabarrescuepledge.netlify.app"}
        title={`I ${text}, Endorse The Naija Bar Rescue Initiative.​ To curtail the spread of COVID-19, Bars have closed their doors. Consequently, they don’t have money to pay their staff and other bills. ​Support your favorite bar and their employees. Buy a N1500 beer voucher, Budweiser would match it and pay the bar N3000 now. You can redeem your voucher when the bar opens. www.naijabarrescue.com`}
      >
        <FacebookIcon size={32} round={true} logoFillColor={"white"} />
      </FacebookShareButton>
      <TwitterShareButton
        className="icon"
        url={"www.naijabarrescuepledge.netlify.app"}
        title={`I ${text}, Endorse The Naija Bar Rescue Initiative.​ To curtail the spread of COVID-19, Bars have closed their doors. Consequently, they don’t have money to pay their staff and other bills. ​Support your favorite bar and their employees. Buy a N1500 beer voucher, Budweiser would match it and pay the bar N3000 now. You can redeem your voucher when the bar opens. www.naijabarrescue.com`}
      >
        <TwitterIcon size={32} round={true} logoFillColor={"white"} />
      </TwitterShareButton>
      <WhatsappShareButton
        className="icon"
        url={"www.naijabarrescuepledge.netlify.app"}
        title={`I ${text}, Endorse The Naija Bar Rescue Initiative.​ To curtail the spread of COVID-19, Bars have closed their doors. Consequently, they don’t have money to pay their staff and other bills. ​Support your favorite bar and their employees. Buy a N1500 beer voucher, Budweiser would match it and pay the bar N3000 now. You can redeem your voucher when the bar opens. www.naijabarrescue.com`}
      >
        <WhatsappIcon size={32} round={true} logoFillColor={"white"} />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
