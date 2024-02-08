import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="237" height="48" viewBox="0 0 237 48" fill="none">
      <g clip-path="url(#clip0_283_27328)">
      <path d="M43.9176 13.4448L40.7754 11.2998L21.5152 23.3791L17.4488 20.5945L36.7089 8.47759L32.6425 5.69296L13.3453 17.8099L9.2789 15.0252L28.5021 2.90833L25.3599 0.763416C24.8423 0.424746 23.9551 0.424746 23.3636 0.801047L1.44174 14.5737C0.850258 14.95 0.776322 15.552 1.29387 15.8907L19.8517 28.5721C20.3692 28.9107 21.2564 28.9107 21.8479 28.5344L43.7328 14.7618C44.3613 14.3855 44.4352 13.7834 43.9176 13.4448Z" fill="#CF2027"/>
      <path d="M43.3631 22.6265L40.2209 20.4816L20.9607 32.5985L4.62096 21.4224L0.887221 23.7554C0.295738 24.1317 0.221803 24.7338 0.739351 25.0725L19.2971 37.7538C19.8147 38.0925 20.7019 38.0925 21.2934 37.7162L43.1783 23.9436C43.8067 23.5673 43.8807 22.9652 43.3631 22.6265Z" fill="#CF2027"/>
      <path d="M42.9565 31.8835L39.8142 29.7386L20.554 41.8555L4.21432 30.6794L0.517547 33.0124C-0.0739367 33.3887 -0.147872 33.9908 0.369676 34.3295L18.9275 47.0108C19.445 47.3495 20.3322 47.3495 20.9237 46.9732L42.8086 33.2006C43.4001 32.8243 43.474 32.2222 42.9565 31.8835Z" fill="#CF2027"/>
      <path d="M65.1741 29.8891H82.401V21.6481H65.1741V13.5953H83.3992V4.90273H55.5255V47.5H84.4712V38.6946H65.1741V29.8891Z" fill="#2D3142"/>
      <path d="M119.295 32.7114H119.11L102.511 4.90273H91.0884V47.5H100.811L100.552 19.6537H100.737L117.446 47.5H128.796V4.90273H119.073L119.295 32.7114Z" fill="#2D3142"/>
      <path d="M147.427 4.90273H137.335V47.4624H147.427V4.90273Z" fill="#2D3142"/>
      <path d="M185.8 28.3839C185.023 27.556 184.136 26.8411 183.101 26.3143C182.066 25.7874 180.957 25.4111 179.774 25.1854V25.0725C181.807 24.3951 183.434 23.2662 184.691 21.7234C185.948 20.1805 186.576 18.2238 186.576 15.8531C186.576 13.6705 186.132 11.9019 185.282 10.5096C184.432 9.1173 183.323 7.98839 181.955 7.16053C180.587 6.33267 179.072 5.76822 177.371 5.42955C175.708 5.09088 174.044 4.90273 172.454 4.90273H155.93V47.4624H172.454C174.451 47.4624 176.373 47.2366 178.295 46.8227C180.181 46.4087 181.881 45.6938 183.36 44.753C184.839 43.7746 186.022 42.5328 186.946 40.9524C187.833 39.3719 188.277 37.4151 188.277 35.0821C188.277 33.6898 188.055 32.4103 187.611 31.2814C187.168 30.1902 186.576 29.2118 185.8 28.3839ZM165.615 13.1061H170.532C172.639 13.1061 174.229 13.4448 175.301 14.0845C176.373 14.7618 176.927 15.8155 176.927 17.2454C176.927 18.7506 176.41 19.9171 175.375 20.7074C174.34 21.4976 172.898 21.8739 171.013 21.8739H165.615V13.1061ZM177.63 36.7002C177.186 37.3775 176.632 37.8667 175.966 38.243C175.301 38.6193 174.525 38.8451 173.674 38.9956C172.824 39.1461 172.011 39.2214 171.234 39.2214H165.615V29.4376H171.197C173.342 29.4376 175.079 29.7762 176.336 30.4536C177.63 31.1309 178.258 32.3727 178.258 34.1037C178.295 35.195 178.073 36.0228 177.63 36.7002Z" fill="#2D3142"/>
      <path d="M235.336 16.4552C234.227 13.7834 232.712 11.488 230.752 9.64411C228.793 7.76261 226.464 6.33266 223.766 5.31665C221.067 4.30064 218.146 3.81145 214.967 3.81145C211.825 3.81145 208.905 4.33827 206.206 5.31665C203.507 6.33266 201.215 7.76261 199.256 9.64411C197.297 11.5256 195.781 13.7834 194.672 16.4552C193.563 19.1269 193.008 22.1373 193.008 25.4488C193.008 28.7226 193.563 31.733 194.672 34.4424C195.781 37.1517 197.297 39.4848 199.256 41.4039C201.215 43.3231 203.544 44.8283 206.206 45.8819C208.905 46.9355 211.825 47.4624 214.967 47.4624C218.11 47.4624 221.067 46.9355 223.766 45.8819C226.464 44.8283 228.793 43.3231 230.752 41.4039C232.712 39.4848 234.227 37.1517 235.336 34.4424C236.445 31.733 237 28.7226 237 25.4488C237 22.1373 236.445 19.1269 235.336 16.4552ZM226.538 31.3567C225.947 32.9748 225.133 34.3671 224.061 35.5336C222.989 36.7002 221.769 37.6033 220.328 38.2806C218.886 38.958 217.296 39.259 215.522 39.259C213.747 39.259 212.158 38.9203 210.716 38.2806C209.274 37.6033 208.017 36.7002 206.982 35.5336C205.947 34.3671 205.134 32.9748 204.542 31.3567C203.951 29.7386 203.655 27.97 203.655 26.0508C203.655 24.207 203.951 22.476 204.505 20.8955C205.06 19.2774 205.873 17.9227 206.945 16.7938C208.017 15.6649 209.237 14.7618 210.679 14.0845C212.121 13.4071 213.71 13.1061 215.485 13.1061C217.259 13.1061 218.849 13.4448 220.328 14.0845C221.806 14.7618 223.026 15.6649 224.061 16.7938C225.096 17.9227 225.91 19.3151 226.501 20.8955C227.093 22.5136 227.388 24.207 227.388 26.0508C227.425 27.9323 227.13 29.7386 226.538 31.3567Z" fill="#2D3142"/>
      </g>
      <defs>
      <clipPath id="clip0_283_27328">
      <rect width="237" height="47" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
};

export default Logo;
