export const claimPopup = {
  stringPopUp: ` <div class="card">
<div class="sharapnel card2">
    <img class="sharapnelImg" style="align-items:center;width:200px; margin-top:30px;margin-bottom:30px;"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4f5837c-dd29-4f01-91d0-2aee7341ca2a/ddtxy61-603d4bf0-e67c-47ac-880e-5e30af7f925a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZjU4MzdjLWRkMjktNGYwMS05MWQwLTJhZWU3MzQxY2EyYVwvZGR0eHk2MS02MDNkNGJmMC1lNjdjLTQ3YWMtODgwZS01ZTMwYWY3ZjkyNWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gsHpesziZ6sVvJzSawbwdvffEBZUzkRapvTGfH7dF9I" />
    <div class="text">
        <div class="title">
            Claim Your Free Sword !
            <div class="tooltip">
                <div class="tooltip-spacing">
                    <div class="tooltip-bg1"></div>
                    <div class="tooltip-bg2"></div>
                    <div class="tooltip-text">?</div>
                </div>
            </div>
            <svg class="popup-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" height="130"
                width="300">
                <path
                    d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                    fill="#303030" stroke="#000" />
            </svg>
            <svg class="popup-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" height="130"
                width="300">
                <g stroke-width="2" stroke-linecap="round">
                    <path class="popup-outline-left"
                        d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                        fill="none" stroke="#303030" />
                    <path class="popup-outline-right"
                        d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                        fill="none" stroke="#303030" />
                </g>
            </svg>
            <div class="popup-text">
                Thank you for allowing SnickerDoodle. You can immediately get your free sword to your account
                via
                click 'Do it!' button.
            </div>
        </div>
        <div class="info">
            Do you want to get your free "sword" ?

        </div>
    </div>

    <div class="buttons">
        <div class="button">Cancel</div>
        <div onclick="doItClicked()" class="button button-primary">Do it!</div>
    </div>
</div>
<div style="display:none;" class="card3">
    <div class="text">
        <div style="text-align: center; margin-top: 20px">
            THANK YOU !
        </div>
    </div>
</div>
`,
  popUpStyle: `      @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

react-extension-container {}

.card {
    align-items: center;
    background-color: white;
    position: fixed !important;
    top: 25%;
    left: 37.5%;
    z-index: 9999;
    border-radius: 20px;
    box-shadow: 0 0.4px 3.6px rgba(0, 0, 0, 0.004),
        0 1px 8.5px rgba(0, 0, 0, 0.01), 0 1.9px 15.7px rgba(0, 0, 0, 0.019),
        0 3.4px 28.2px rgba(0, 0, 0, 0.03), 0 6.3px 54.4px rgba(0, 0, 0, 0.047),
        0 15px 137px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    position: relative;
    width: 25%;
    min-width: 400px;
}

.top {
    background-color: #eee;
    border-radius: 20px;
    width: 90%;
    margin-top: 20px;
}

.text {
    box-sizing: border-box;
    padding: 0 20px 20px;
    width: 100%;
}

.title {
    align-items: center;
    display: flex;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 4px;
    position: relative;
    margin-top: 10px;
}

.tooltip {
    font-size: 16px;
    font-weight: normal;
    margin-top: 2px;
    position: relative;
}

.tooltip:hover {
    cursor: help;
}

.tooltip-spacing {
    height: 20px;
    margin: 8px;
    position: relative;
    width: 20px;
}

.tooltip-bg1 {
    background-color: #000;
    border-radius: 10px;
    content: " ";
    display: flex;
    height: 20px;
    position: absolute;
    top: 0;
    width: 20px;
}

.tooltip-bg2 {
    background-color: #fff;
    border-radius: 8px;
    content: " ";
    display: flex;
    height: 16px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 16px;
}

.tooltip-text {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    position: relative;
    text-align: center;
    width: 20px;
}

.info {
    color: #64686b;
}

.popup-bg {
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.16)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.23));
    position: absolute;
    top: -126px;
}

.popup-outline {
    position: absolute;
    top: -126px;
}

.popup-text {
    border-radius: 12px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    left: 8px;
    opacity: 0;
    padding: 12px 16px;
    position: absolute;
    top: -117px;
    transition: opacity 240ms 120ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 292px;
}

.tooltip:hover~.popup-text {
    display: block;
}

.popup-bg {
    opacity: 0;
    transition: opacity 240ms 120ms cubic-bezier(0.4, 0, 0.2, 1);
}

.popup-outline-left {
    stroke-dasharray: 0 426px;
    stroke-dashoffset: 1px;
    transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.popup-outline-right {
    stroke-dasharray: 352px 352px;
    stroke-dashoffset: -352px;
    transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip:hover~.popup-text {
    opacity: 1;
}

.tooltip:hover~.popup-bg {
    opacity: 1;
    transition: opacity 240ms 120ms cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip:hover~.popup-outline .popup-outline-left {
    stroke-dasharray: 426px 426px;
    transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip:hover~.popup-outline .popup-outline-right {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.buttons {
    display: flex;
    margin-top: 8px;
    width: 100%;
}

.button {
    align-items: center;
    background: #edf1f7;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 0 5px 28px 20px;
    width: 100%;
}

.button:last-child {
    margin: 0 20px 20px 5px;
}

.button-primary {
    background-color: #0060f6;
    color: #fff;
}
    `,

  scrptb: `
   
    `,
};
