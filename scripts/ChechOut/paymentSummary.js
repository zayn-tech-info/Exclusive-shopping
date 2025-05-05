import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

document.addEventListener("DOMContentLoaded", () => {
  let paymentSummary = "";
  deliveryOptions.forEach((option) => {
    const today = dayjs();
    const deliveryDateAdd = today.add(option.deliveryDays, "days");
    const deliveryDate = deliveryDateAdd.format("dddd, MMMM D");
    console.log("Hi");

    paymentSummary += `
		<div class="border-1 border-gray-400 px-5 p-2 rounded-md">
			<div class="flex gap-5 items-center">
				<input type="radio" />
				<div class="space-y-3">
				<p class="text-xl font-medium text-[#DB4444]">
					${deliveryDate}
				</p>
				<div class="flex gap-10">
					<p class="font-medium">${
            option.deliveryDays === 0 ? "Free Shipping" : option.deliveryDays
          }}</p>
					<p class="opacity-60">After 7 days</p>
				</div>
				</div>
			</div>
		</div>
	  `;
    const deliveryOptionElement = document.querySelector(".delivery-option");
    if (deliveryOptionElement) {
      deliveryOptionElement.innerHTML = paymentSummary;
    }
    console.log(paymentSummary);
  });
  console.log(dayjs);
  console.log(cart);
});
