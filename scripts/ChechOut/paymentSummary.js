import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

document.addEventListener("DOMContentLoaded", () => {
  let paymentSummary = "";
  let deliveryDate;
  deliveryOptions.forEach((option) => {
    function getDeliveryDate(Numdays) {
      const today = dayjs();
      const deliveryDateAdd = today.add(Numdays, "days");
      deliveryDate = deliveryDateAdd.format("dddd, MMMM D");
      return deliveryDate;
    }
    getDeliveryDate(option.deliveryDays);

    paymentSummary += `
		<div class="js-deliveryOption border-1 cursor-pointer border-gray-400 px-5 p-2 rounded-md"
      data-delivery-id="${option.id}">
			<div class="flex gap-5 items-center">
				<input class="delivery-btn" name="deliveryOption"
         type="radio" />
				<div class="space-y-3">
				<p class="text-xl font-medium text-[#DB4444]">
					${deliveryDate}
				</p>
				<div class="flex gap-10">
					<p class="font-medium">${
            option.priceCent === 0 ? "Free Shipping" : option.priceCent
          }</p>
					<p class="opacity-60">${
            option.deliveryDays === 0
              ? "Today"
              : `After ${option.deliveryDays}  days`
          }</p>
				</div>
				</div>
			</div>
		</div>
	  `;

    const deliveryOptionElement = document.querySelector(".delivery-option");
    if (deliveryOptionElement) {
      deliveryOptionElement.innerHTML = paymentSummary;
    }

    const jsDeliveryOption = document.querySelectorAll(".js-deliveryOption");
    let matchingDelivery; // Declare outside the loop
    jsDeliveryOption.forEach((jsOption) => {
      jsOption.addEventListener("click", () => {
        jsOption.querySelector(".delivery-btn").checked = true;
        const deliveryId = jsOption.dataset.deliveryId;
        console.log(deliveryId);

        deliveryOptions.forEach((option) => {
          if (Number(deliveryId) === Number(option.id)) {
            matchingDelivery = option;
            console.log(matchingDelivery);
            document.querySelector(".js-delivery-date").innerText =
              getDeliveryDate(matchingDelivery.deliveryDays);
            document.querySelector(".js-shipping").innerText =
              matchingDelivery.priceCent === 0 ? "Free Shipping" : "$"+ matchingDelivery.priceCent;
          }
        });
      });
    });
  });
});
``;
console.log(cart);
console.log(deliveryOptions);
