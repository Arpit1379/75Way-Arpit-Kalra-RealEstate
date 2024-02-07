import React from 'react'
import { Button,Img,PagerIndicator,Text,} from "components";


function Service() {
  return (
    <div>
      <Text
            className="mt-8 text-center text-deep_orange-A200 text-lg"
            size="txtNunitoSemiBold18"
          >
            Our Properties
          </Text>
          <Text
            className="mt-2.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
            size="txtNunitoSemiBold28"
          >
            According to Your Prefrences
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl min-h-[auto] mt-[37px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_frame7159.png')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[25px] w-[67%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Tribble Story House For Rent
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        13,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[37%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_264x407.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Sell
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Brand New Appartments
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-[19px] w-1/2 md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_orange-A200"
                      size="txtNunitoSemiBold25"
                    >
                      13,000,00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] mt-[18px] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-[23px] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1200 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-[19px] justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_1.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[23px] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Luxurious Villa
                  </Text>
                  <div className="flex flex-row gap-[5px] items-center justify-start ml-0.5 md:ml-[0] w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        35,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      5 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_2.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[25px] w-[67%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Diamond Manco Apartment
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        10,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[37%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1000 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-[19px] justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_3.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Sell
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Affordable Green Villa House
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-5 w-1/2 md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_orange-A200"
                      size="txtNunitoSemiBold25"
                    >
                      30,000,00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[18px] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      4 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3000 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_4.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start ml-6 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Spaceious 2 Story Bunglow{" "}
                  </Text>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        35,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      5 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PagerIndicator
            className="flex h-2.5 justify-center mt-10 w-[70px]"
            count={4}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-deep_orange-A200 w-2.5"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
            selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          />
    </div>
  )
}

export default Service
