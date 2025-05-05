/* import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

cart.forEach((cartItem) => {
  deliveryOptions.forEach((option) => {
    let paymentSummary = "";
    const deliveryOptionId = option.id;
    let deliveryOption;
    if (cartItem.deliveryOptionsId === deliveryOptionId) {
      deliveryOption = option;
		console.log(deliveryOption);
		
      const today = dayjs();
      const deliveryDate = today.add(option.deliveryDays, "days");
      deliveryDate.format("dddd, MMMM D");
      console.log(deliveryDate);

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
            deliveryOption === 0 ? "Free Shipping" : deliveryOption.deliveryDays
          }}</p>
					<p class="opacity-60">After 7 days</p>
				</div>
				</div>
			</div>
		</div>
	  `;
    }
  });
});
 */
console.log("Hi");
