import React from 'react'
import { Button,Img,PagerIndicator,Text,} from "components";

function SingleProperty() {
  return (
    <div>
      
<div className="bg-white shadow-bs rounded-[5px] overflow-hidden">
  <div
    className="bg-cover bg-no-repeat h-[264px] p-[15px]"
    style={{ backgroundImage: "url('images/img_frame7159.png')" }}
  >
    <div className="flex justify-between mb-[98px] px-[15px] pt-[15px]">
      <Button
        className="text-xs font-semibold cursor-pointer"
        color="deep_orange_A200"
      >
        For Rent
      </Button>
      <Button className="w-[33px] h-[33px]">
        <Img src="images/img_favorite.svg" alt="favorite" />
      </Button>
    </div>
    <div className="flex justify-between px-[15px]">
      <Button className="rotate-[-90deg]">
        <Img src="images/img_vector_deep_orange_a200.svg" alt="Left Arrow" />
      </Button>
      <Button className="rotate-[90deg]">
        <Img src="images/img_vector_deep_orange_a200_37x37.svg" alt="Right Arrow" />
      </Button>
    </div>
  </div>
  <div className="p-[15px]">
    <Text className="text-lg font-semibold">
      Tribble Story House For Rent
    </Text>
    <div className="flex items-center mt-[22px]">
      <Img src="images/img_settings.svg" alt="settings" className="h-[19px]" />
      <Text className="ml-[7px] text-xs font-semibold">
        <span>13,000/</span><span>Mo</span>
      </Text>
    </div>
    <div className="flex items-center mt-[10px]">
      <Img src="images/img_linkedin.svg" alt="Location" className="h-[17px]" />
      <Text className="ml-[5px]">
        Maharashtra
      </Text>
    </div>
    <div className="flex justify-between mt-[10px]">
      <div className="flex items-center">
        <Img src="images/img_car.svg" alt="Beds" />
        <Text className="ml-[5px]">3 Beds</Text>
      </div>
      <div className="flex items-center">
        <Img src="images/img_settings_deep_orange_a200.svg" alt="Baths" />
        <Text className="ml-[5px]">2 Baths</Text>
      </div>
      <div className="flex items-center">
        <Img src="images/img_close.svg" alt="Area" />
        <Text className="ml-[5px]">1500 Sq Ft</Text>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SingleProperty
