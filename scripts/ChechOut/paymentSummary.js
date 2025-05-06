import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

document.addEventListener("DOMContentLoaded", () => {
  let paymentSummary = "";
  deliveryOptions.forEach((option) => {
    const today = dayjs();
    const deliveryDateAdd = today.add(option.deliveryDays, "days");
    const deliveryDate = deliveryDateAdd.format("dddd, MMMM D");

    let isChecked;
    cart.forEach((cartItem) => {
      isChecked = option.id === cartItem.deliveryOptionId;
    });

    // document.querySelector('.js-delivery-date').innerText = 
    paymentSummary += `
		<div class="js-deliveryOption border-1 cursor-pointer border-gray-400 px-5 p-2 rounded-md">
			<div class="flex gap-5 items-center">
				<input name="deliveryOption"
        ${isChecked ? "checked" : console.log("Hi")}
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
  });
});
console.log(cart);
console.log(deliveryOptions);
