import Head from 'next/head';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Layout from '../App/components/Layout';
import Socials from '../App/components/Socials';

const Base = styled.div`
  margin-top: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-style: italic;
`;

const City = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.palette.primary.main};
`;
const Street = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Metro = styled.div`
  margin-top: 8px;

  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    background: #2196f3;
    border: none;
    border-radius: 50%;
    margin-right: ${props => props.theme.spacing(1)}px;
  }
`;

const Phone = styled.a`
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  margin-top: 32px;

  color: ${props => props.theme.palette.text.primary};
`;

const Email = styled.div`
  margin-top: 8px;
  font-weight: 700;
`;

const Map = styled.div`
  width: 100%;
  height: 440px;

  margin-top: 60px;
  margin-bottom: 120px;
  border-radius: 16px;
  overflow: hidden;
`;

const StyledSocials = styled(Socials)`
  margin-top: 32px;
`;

const Pin = (props) => (
  <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <rect width="39.9998" height="40" rx="19.9999" fill="white"/>
      <path d="M18.2855 9.58508C18.0976 9.58508 18.0769 9.73019 18.3046 10.0108C18.6036 10.6876 21.1204 14.1382 18.434 23.0903C15.4618 32.6594 20.6753 39.8136 21.2795 39.8136C21.3123 39.8136 21.3316 39.7925 21.335 39.7494C21.4037 38.9152 20.3157 36.3639 20.6563 33.0641C20.9679 30.0468 22.7683 26.9973 23.3816 22.0135C24.4539 13.3021 19.2355 9.58508 18.2855 9.58508Z" fill="#D05045"/>
      <path d="M15.2697 33.1076C15.2697 31.4111 16.1741 29.9218 17.5259 29.0964C17.5242 28.8286 17.5282 28.5573 17.5383 28.2823C15.7747 29.1715 14.5642 30.9976 14.5642 33.1076C14.5642 36.0912 16.9828 38.5098 19.9664 38.5098C20.0233 38.5098 20.0798 38.5072 20.1363 38.5055C20.0012 38.2933 19.8606 38.0568 19.7176 37.7975C17.243 37.6677 15.2697 35.6139 15.2697 33.1076Z" fill="#72538D"/>
      <path d="M25.3682 33.1076C25.3682 30.8306 23.9588 28.884 21.9653 28.0891C21.8924 28.3178 21.8199 28.5426 21.7486 28.7634C23.4567 29.4669 24.6626 31.1487 24.6626 33.1076C24.6626 35.354 23.0769 37.2361 20.9661 37.6959C21.0172 37.9432 21.0679 38.1735 21.1151 38.386C23.5465 37.8592 25.3682 35.6966 25.3682 33.1076Z" fill="#72538D"/>
      <path d="M19.966 37.8041C19.8826 37.8041 19.7997 37.8019 19.7173 37.7974C19.8601 38.0568 20.0008 38.2933 20.136 38.5055C20.4709 38.4951 20.7983 38.4547 21.1151 38.386C21.068 38.1735 21.0172 37.943 20.9661 37.6959C20.6437 37.7661 20.3093 37.8041 19.966 37.8041Z" fill="#72538D"/>
      <path d="M26.8755 31.7358C26.8755 28.9078 25.1762 26.4771 22.7434 25.4079C22.684 25.6444 22.6228 25.8755 22.5606 26.1029C24.6888 27.0871 26.1699 29.2411 26.1699 31.736C26.1699 34.8047 23.9297 37.3587 20.999 37.8521C21.0519 38.1015 21.1036 38.3326 21.1503 38.5439C24.4021 37.9822 26.8755 35.148 26.8755 31.7358Z" fill="#2F76AC"/>
      <path d="M13.7625 31.7359C13.7625 29.0891 15.4293 26.8252 17.768 25.9358C17.8099 25.672 17.8577 25.4058 17.9118 25.1371C15.0991 26.0118 13.0569 28.6355 13.0569 31.7359C13.0569 35.5519 16.1503 38.6452 19.9663 38.6452C20.0524 38.6452 20.138 38.6431 20.2233 38.64C20.0859 38.4309 19.9418 38.1956 19.7945 37.9352C16.4531 37.8438 13.7625 35.0991 13.7625 31.7359Z" fill="#2F76AC"/>
      <path d="M19.9661 37.9396C19.9085 37.9396 19.8516 37.9368 19.7944 37.9352C19.9417 38.1955 20.0858 38.4309 20.2232 38.64C20.5381 38.6284 20.8475 38.5961 21.1503 38.5438C21.1036 38.3326 21.0519 38.1015 20.999 37.8521C20.6629 37.9086 20.3182 37.9396 19.9661 37.9396Z" fill="#2F76AC"/>
      <path d="M28.6539 30.1526C28.6539 26.5612 26.4724 23.4794 23.3624 22.1596C23.3307 22.4051 23.2967 22.6468 23.2597 22.8831C24.1248 23.2745 24.9213 23.823 25.6127 24.5145C27.1188 26.0206 27.9481 28.0229 27.9481 30.1526C27.9481 32.2823 27.1188 34.2847 25.6127 35.7906C24.3614 37.0419 22.7674 37.8255 21.0425 38.055C21.0972 38.3067 21.1494 38.5375 21.1944 38.7459C25.4101 38.1528 28.6539 34.5317 28.6539 30.1526Z" fill="#00A5D3"/>
      <path d="M14.3367 35.7906C12.8306 34.2846 12.0013 32.2823 12.0013 30.1526C12.0013 28.0229 12.8306 26.0205 14.3367 24.5146C15.5293 23.3219 17.0336 22.5541 18.6656 22.2861C18.735 22.0343 18.8 21.7873 18.861 21.5446C14.5937 22.0912 11.2957 25.7368 11.2957 30.1528C11.2957 34.9461 15.1815 38.8318 19.9747 38.8318C20.0992 38.8318 20.223 38.8285 20.3462 38.8233C20.206 38.6199 20.0571 38.3864 19.9038 38.1252C17.8006 38.1069 15.8259 37.2799 14.3367 35.7906Z" fill="#00A5D3"/>
      <path d="M19.9747 38.126C19.951 38.126 19.9275 38.1253 19.9038 38.1252C20.0571 38.3861 20.2061 38.6199 20.3461 38.8233C20.6328 38.8112 20.9156 38.7852 21.1944 38.7459C21.1494 38.5376 21.0971 38.3067 21.0425 38.055C20.6914 38.1016 20.3349 38.126 19.9747 38.126Z" fill="#00A5D3"/>
      <path d="M30.3302 28.6622C30.3302 24.1798 27.4869 20.3617 23.5055 18.9126C23.5176 19.1609 23.5246 19.414 23.5255 19.6729C24.7351 20.1528 25.8453 20.8788 26.793 21.8266C28.6188 23.6524 29.6244 26.0801 29.6244 28.6622C29.6244 31.2444 28.6188 33.672 26.793 35.4978C25.2364 37.0545 23.2423 38.0142 21.0879 38.2636C21.1444 38.5192 21.1966 38.7512 21.2385 38.956C26.3629 38.3248 30.3302 33.957 30.3302 28.6622Z" fill="#00A66F"/>
      <path d="M19.9581 38.3292C17.3759 38.3292 14.9483 37.3236 13.1225 35.4978C11.2967 33.672 10.2911 31.2444 10.2911 28.6622C10.2911 26.08 11.2967 23.6524 13.1225 21.8266C14.8127 20.1365 17.0186 19.1498 19.3853 19.0125C19.424 18.7696 19.4585 18.5321 19.4883 18.3007C13.9778 18.5463 9.58545 23.0911 9.58545 28.6622C9.58545 34.3908 14.2295 39.0347 19.9581 39.0347C20.1357 39.0347 20.3121 39.0301 20.4876 39.0213C20.3436 38.8245 20.1881 38.5928 20.026 38.3283C20.0033 38.3286 19.9806 38.3292 19.9581 38.3292Z" fill="#00A66F"/>
      <path d="M20.0256 38.3283C20.1877 38.5931 20.3433 38.8247 20.4872 39.0214C20.7404 39.0087 20.9909 38.9865 21.239 38.9559C21.1971 38.7511 21.1449 38.519 21.0884 38.2635C20.7379 38.3042 20.3834 38.3259 20.0256 38.3283Z" fill="#00A66F"/>
      <path d="M19.9748 38.5324C16.9538 38.5324 14.1138 37.3561 11.9777 35.22C9.84159 33.0839 8.66524 30.2438 8.66524 27.2229C8.66524 24.202 9.84159 21.3619 11.9777 19.2258C14.0395 17.164 16.7572 15.9966 19.6601 15.918C19.6625 15.6741 19.6601 15.4387 19.6527 15.2122C13.1658 15.3829 7.95947 20.6948 7.95947 27.2231C7.95947 33.8589 13.339 39.2384 19.9748 39.2384C20.1971 39.2384 20.4178 39.2318 20.6371 39.2199C20.4894 39.0321 20.3254 38.8014 20.1519 38.5306C20.0928 38.5311 20.0339 38.5324 19.9748 38.5324Z" fill="#058C59"/>
      <path d="M31.9899 27.2229C31.9899 21.618 28.1519 16.9095 22.9607 15.5818C23.0348 15.8352 23.1031 16.0971 23.1644 16.3678C24.9625 16.8933 26.6104 17.8642 27.9718 19.2258C30.1079 21.3619 31.2843 24.202 31.2843 27.2229C31.2843 30.2438 30.1079 33.0839 27.9718 35.22C26.1116 37.0802 23.7173 38.2123 21.1348 38.4736C21.1927 38.735 21.2433 38.9667 21.2797 39.1672C27.3016 38.5167 31.9899 33.4177 31.9899 27.2229Z" fill="#058C59"/>
      <path d="M20.1516 38.5303C20.3251 38.8013 20.4892 39.0317 20.6369 39.2196C20.8527 39.2078 21.067 39.1902 21.2796 39.1672C21.2432 38.9666 21.1926 38.735 21.1347 38.4737C20.8097 38.5066 20.4818 38.5252 20.1516 38.5303Z" fill="#058C59"/>
      <path d="M19.9662 38.7185C18.1956 38.7185 16.4785 38.3718 14.8622 37.6882C13.3009 37.0278 11.8984 36.0821 10.6939 34.8777C9.48928 33.6731 8.54373 32.2707 7.88333 30.7093C7.19976 29.0931 6.85307 27.3758 6.85307 25.6054C6.85307 23.8347 7.19959 22.1176 7.88333 20.5014C8.54373 18.94 9.48944 17.5374 10.6939 16.333C11.8984 15.1284 13.3009 14.1829 14.8622 13.5225C16.2746 12.9251 17.764 12.5851 19.2988 12.5089C19.2366 12.2572 19.1698 12.0259 19.1013 11.8144C11.8725 12.2609 6.14746 18.2641 6.14746 25.6054C6.14746 33.2373 12.3344 39.4241 19.9662 39.4241C20.2409 39.4241 20.5135 39.4151 20.7843 39.3993C20.634 39.2238 20.4601 38.9942 20.2729 38.7147C20.1707 38.7172 20.0686 38.7185 19.9662 38.7185Z" fill="#72B956"/>
      <path d="M33.7848 25.6054C33.7848 18.3569 28.2036 12.4125 21.1042 11.8337C21.2828 12.0686 21.4596 12.323 21.6316 12.5967C22.8147 12.7461 23.9659 13.0556 25.0699 13.5225C26.6313 14.1829 28.0337 15.1286 29.2383 16.3331C30.4429 17.5377 31.3884 18.9401 32.0488 20.5014C32.7324 22.1177 33.0791 23.8349 33.0791 25.6054C33.0791 27.3761 32.7326 29.0932 32.0488 30.7094C31.3884 32.2708 30.4427 33.6733 29.2383 34.8778C28.0337 36.0823 26.6313 37.0279 25.0699 37.6883C23.8248 38.2148 22.5196 38.5406 21.1764 38.6629C21.2352 38.9311 21.2835 39.1643 21.3114 39.3587C28.312 38.6823 33.7848 32.7833 33.7848 25.6054Z" fill="#72B956"/>
      <path d="M20.2727 38.7148C20.4599 38.9944 20.6338 39.224 20.7841 39.3993C20.9609 39.3891 21.1366 39.3757 21.3116 39.3587C21.2835 39.1643 21.2354 38.931 21.1766 38.6629C20.8771 38.6903 20.5758 38.7079 20.2727 38.7148Z" fill="#72B956"/>
      <path d="M35.7662 23.8103C35.7662 15.0841 28.6923 8.01016 19.9661 8.01016C11.2399 8.01016 4.16602 15.0841 4.16602 23.8103C4.16602 32.5365 11.2399 39.6104 19.9661 39.6104C20.2962 39.6104 20.6236 39.5989 20.9486 39.579C20.7968 39.4248 20.6086 39.1958 20.3988 38.8981C20.2549 38.9021 20.1107 38.9046 19.9661 38.9046C17.9281 38.9046 15.9513 38.5055 14.0909 37.7186C12.2935 36.9583 10.6792 35.87 9.29267 34.4834C7.90626 33.0968 6.81773 31.4825 6.05744 29.6851C5.27054 27.8247 4.87147 25.8479 4.87147 23.8099C4.87147 21.7719 5.27054 19.7952 6.05744 17.9347C6.81773 16.1373 7.9061 14.5231 9.29267 13.1365C10.6791 11.7501 12.2935 10.6615 14.0909 9.90126C15.9513 9.11436 17.9281 8.71528 19.9661 8.71528C22.0041 8.71528 23.9809 9.11436 25.8413 9.90126C27.6387 10.6615 29.253 11.7499 30.6396 13.1365C32.026 14.5231 33.1145 16.1373 33.8748 17.9347C34.6617 19.7952 35.0608 21.7719 35.0608 23.8099C35.0608 25.8479 34.6617 27.8247 33.8748 29.6851C33.1145 31.4825 32.0261 33.0968 30.6396 34.4834C29.253 35.8698 27.6387 36.9583 25.8413 37.7186C24.3642 38.3434 22.8137 38.7226 21.2174 38.8529C21.2763 39.1316 21.3191 39.3659 21.3328 39.5506C29.419 38.8579 35.7662 32.0759 35.7662 23.8103Z" fill="#F8E831"/>
      <path d="M20.3989 38.8982C20.6085 39.1959 20.7969 39.4248 20.9487 39.5792C21.0773 39.5713 21.2054 39.5619 21.333 39.5509C21.3193 39.3662 21.2766 39.1318 21.2176 38.8531C20.9459 38.8753 20.6731 38.8907 20.3989 38.8982Z" fill="#EFE435"/>
      <path d="M37.8832 22.1169C37.8832 12.2403 29.8767 4.2337 20.0001 4.2337C10.1235 4.2337 2.11694 12.2403 2.11694 22.1169C2.11694 31.9934 10.1235 40 20.0001 40C20.4062 40 20.8089 39.9851 21.2084 39.9585C21.0681 39.8707 20.8456 39.6416 20.5772 39.2838C20.3853 39.29 20.1932 39.2944 20.0003 39.2944C17.681 39.2944 15.4315 38.8403 13.3142 37.9449C11.2688 37.0798 9.4316 35.8411 7.85389 34.2632C6.27618 32.6855 5.03748 30.8483 4.17224 28.8029C3.27664 26.6856 2.82271 24.4361 2.82271 22.1169C2.82271 19.7976 3.2768 17.5481 4.17224 15.4308C5.03732 13.3854 6.27602 11.5482 7.85389 9.97049C9.4316 8.39278 11.2688 7.15408 13.3142 6.28884C15.4315 5.39324 17.681 4.93931 20.0003 4.93931C22.3195 4.93931 24.569 5.3934 26.6863 6.28884C28.7317 7.15392 30.5689 8.39261 32.1466 9.97049C33.7243 11.5482 34.963 13.3854 35.8283 15.4308C36.7239 17.5481 37.1778 19.7976 37.1778 22.1169C37.1778 24.4361 36.7237 26.6856 35.8283 28.8029C34.9632 30.8483 33.7245 32.6855 32.1466 34.2632C30.5689 35.8409 28.7317 37.0796 26.6863 37.9449C24.965 38.673 23.1563 39.1091 21.2936 39.2469C21.3504 39.5382 21.3824 39.771 21.3689 39.9359C21.3684 39.9408 21.3671 39.9443 21.3664 39.9486C30.6045 39.2506 37.8832 31.5338 37.8832 22.1169Z" fill="#EC6641"/>
      <path d="M21.2598 39.0608C21.022 39.0784 20.7831 39.09 20.5435 39.0979C20.8118 39.4555 21.0344 39.6847 21.1748 39.7726C21.2274 39.769 21.2802 39.7666 21.3326 39.7627C21.3335 39.7584 21.3348 39.7548 21.3351 39.7499C21.3486 39.5848 21.3166 39.352 21.2598 39.0608Z" fill="#F08240"/>
      <path d="M21.5284 0H18.4203C8.59513 0.753762 0.753925 8.59497 0 18.4201V21.5282C0.779061 31.6825 9.12805 39.7171 19.4135 39.9998H20.5349C31.1536 39.708 39.708 31.1535 39.9998 20.5349V19.4137C39.7173 9.12806 31.6826 0.779061 21.5284 0ZM39.2943 20.5251C39.0152 30.5081 31.1765 38.5897 21.2955 39.2563C21.3291 39.4576 21.3454 39.6236 21.335 39.7496C21.3314 39.7927 21.3123 39.8137 21.2795 39.8137C21.1832 39.8137 20.9699 39.6316 20.6914 39.2877C20.6359 39.2896 20.5807 39.2927 20.5252 39.2944H19.4236C14.6388 39.1605 10.0951 37.2647 6.62928 33.9557C3.17892 30.6615 1.07596 26.2392 0.70577 21.5013V18.4476C1.06323 13.8736 3.05194 9.56288 6.30741 6.30741C9.56288 3.05177 13.8736 1.06307 18.4476 0.705772H21.5011C26.2392 1.07596 30.6614 3.17892 33.9557 6.62928C37.2647 10.0951 39.1605 14.6388 39.2943 19.4236V20.5251Z" fill="#E94A44"/>
      <path d="M21.2795 39.8137C21.3123 39.8137 21.3316 39.7927 21.335 39.7496C21.3454 39.6234 21.329 39.4576 21.2955 39.2563C21.0949 39.2699 20.8936 39.2803 20.6914 39.2877C20.9699 39.6314 21.1832 39.8137 21.2795 39.8137Z" fill="#E94A44"/>
      <path d="M19.6326 11.2377C20.0919 11.674 20.608 12.2747 21.0951 13.0687C22.1121 14.7264 23.2129 17.6091 22.6814 21.9276C22.3519 24.6056 21.6675 26.7218 21.0637 28.5889C20.5478 30.1846 20.1022 31.5627 19.9545 32.992C19.7939 34.5474 19.9326 35.9323 20.1276 37.0651C19.7553 36.3379 19.368 35.4328 19.0383 34.3629C18.2734 31.8808 17.6646 27.9466 19.108 23.3L19.109 23.2967L19.1099 23.2935C20.5798 18.3945 20.7539 14.3486 19.6326 11.2377ZM18.2855 9.58508C18.0976 9.58508 18.0769 9.73019 18.3046 10.0108C18.6036 10.6876 21.1204 14.1382 18.434 23.0903C15.4618 32.6594 20.6753 39.8136 21.2795 39.8136C21.3123 39.8136 21.3316 39.7925 21.335 39.7494C21.4037 38.9152 20.3157 36.3639 20.6563 33.0641C20.9679 30.0468 22.7683 26.9973 23.3816 22.0135C24.4539 13.3021 19.2355 9.58508 18.2855 9.58508Z" fill="#E94A44"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="39.9998" height="40" rx="19.9999" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

const Location = () => {
  const latLng = { lat: 59.9407315, lng: 30.3226824 };
  const defaultProps = {
    center: latLng,
    zoom: 14,
    mapId: '7a8e0b60579ebaf9',
    mapTypeControl: false,
    streetViewControl: false,
  };
  return (
    <>
      <Head>
        <title>Как добраться? | Центр Ошо Медитаций</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Base>
          <Info>
            <City>Санкт-Петербург</City>
            <Street>Большая Конюшенная пл. 2В</Street>
            <Metro>Метро Невский проспект</Metro>
            <Phone href="tel:+78129220604" target="_blank">+7 (812) 922-06-04</Phone>
            <Email href="tel:i@oshocenter" target="_blank">i@oshocenter.ru</Email>
            <StyledSocials size={40} />
          </Info>
          <Map>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBF7_ZOPrvhrHymcTv8w188hwUlYLAPJyk' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
              <Pin {...defaultProps.center} />
            </GoogleMapReact>
          </Map>
        </Base>
      </Layout>
    </>
  );
};

export default Location;
