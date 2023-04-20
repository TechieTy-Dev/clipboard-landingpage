import { logo,hp,google,ibm,vector,microsoft, mobile, computer, list,letter,eye } from './images';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className=" bg-white bg-[url('./images/bg-header-mobile.png')] bg-top bg-contain bg-no-repeat lg:bg-[url('./images/bg-header-desktop.png')]">
      {/* HERO SECTION */}
<section className="flex flex-col justify-center align-middle items-center w-[80%] mx-auto">
{/* LOGO */}
  <img src={logo} alt="logo" className="w-28 my-16 lg:my-28 h-28 mx-auto"/>
  {/* HERO */}
<h1 className="text-heading font-semibold text-4xl">A history of everything you copy</h1>
<p className="text-text mt-6 lg:w-[50%] leading-7 tracking-wide">
Clipboard allows you to track and organize everything you 
copy. Instantly access your clipboard on all your devices.
</p>
{/* HERO BUTTON SECTION */}
<div className="flex flex-col lg:flex-row mt-8 gap-6 w-[100%] justify-center items-center align-middle">
<button className="bg-primary font-semibold shadow-lg text-white  p-3 rounded-full hover:opacity-70 hover:cursor-pointer w-[100%] lg:w-[20%]">
Download for iOS
</button>
<button className="bg-secondary shadow-lg text-white font-semibold  p-3 rounded-full hover:opacity-70 hover:cursor-pointer w-[100%] lg:w-[20%]">
Download for Mac
</button>
</div>
</section>
{/* Mid Section */}
<div className="my-24 w-[80%] mx-auto ">
<h2 className="text-heading text-3xl font-semibold tracking-wide">
Keep track of your snippets
</h2>
<p className="text-text mt-4 leading-7 tracking-wide lg:w-[50%] mx-auto">
Clipboard instantly stores any item you copy in the cloud, 
meaning you can access your snippets immediately on all your 
devices. Our Mac and iOS apps will help you organize everything.
</p>
</div>
{/* BENEFITS SECTION */}
<section className="w-[80%] lg:w-[100%] mx-auto flex my-8 flex-col lg:flex-row">
  {/* COMPUTER IMAGE */}
  <div>
  <img src={computer} alt="computer" className=" mx-auto lg:w-[100%]" />
  </div>
  {/* BENEFITS CONTAINER */}
  <div className="flex flex-col mt-20 lg:text-left lg:w-[40%] lg:ml-24">
    {/* QUICK SEARCH BENEFIT*/}
  <h3 className="text-heading text-2xl font-semibold mb-2">
Quick Search
</h3>
<p className="text-text mb-8 lg:w-[70%] leading-7 tracking-wide">
Easily search your snippets by content, category, web address, application, and more.
</p>
{/* ICLOUD BENEFIT */}
<h3 className="text-heading text-2xl font-semibold mb-2">
iCloud Sync
</h3>
<p className="text-text mb-8 lg:w-[70%] leading-7 tracking-wide">
Instantly saves and syncs snippets across all your devices.
</p>
{/* HISTORY BENEFIT */}
<h3 className="text-heading text-2xl font-semibold mb-2">
Complete History

</h3>
<p className="text-text mb-8 lg:w-[70%] leading-7 tracking-wide">Retrieve any snippets from the first moment you started using the app.</p>
</div>
</section>
{/* Mid Section */}
<div className="my-24 mb-16 w-[80%] mx-auto">
<h2 className="text-heading text-3xl font-semibold tracking-wide">
Access Clipboard Anywhere
</h2>
<p className="text-text mt-4  leading-7 tracking-wide lg:w-[50%] mx-auto">
Whether you’re on the go, or at your computer, you can access all your Clipboard 
snippets in a few simple clicks.
</p>
</div>
{/* FEATURES SECTION */}
<section className="w-[80%] mx-auto flex flex-col my-8 justify-center items-center align-middle">
  {/* MOBILE DEVICES */}
  <img src={mobile} alt="mobile"/>
  <h2 className="text-heading text-3xl font-semibold mt-20 tracking-wide">
Supercharge your workflow
</h2>
<p className="text-text mt-4  lg:w-[50%] leading-7 tracking-wide mx-auto">
We’ve got the tools to boost your productivity.
</p>
{/* FEATURES CONTAINER */}
<div className="flex flex-col lg:flex-row justify-center items-center align-middle mx-auto lg:gap-8 lg:mt-24">
  {/* LIST */}
<div className="flex mt-24 flex-col justify-center items-center align-middle mx-auto lg:mt-0 lg:w-[30%]">
  <img src={list} alt="blacklists"  />
<h3 className="text-heading text-2xl font-semibold mt-6">
Create blacklists
</h3>
<p className="text-text mt-5 leading-7 tracking-wide">
Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
</p>
</div>
{/* LETTER */}
<div className="flex mt-24 flex-col justify-center items-center align-middle  mx-auto  lg:mt-0 lg:w-[30%]">
  <img src={letter} alt="letter"  />
<h3 className="text-heading mt-6 text-2xl font-semibold">
Plain text snippets
</h3>
<p className="text-text mt-4 leading-7 tracking-wide">
Remove unwanted formatting from copied text for a consistent look.
</p>
</div>
{/* PREVIEW */}
<div className="flex mt-24 lg:mt-0 flex-col justify-center items-center align-middle  mx-auto lg:w-[30%]">
  <img src={eye} alt="eye"/>
<h3 className="text-heading mt-6 text-2xl font-semibold">
Sneak preview
</h3>
<p className="text-text leading-7 tracking-wide mt-4">
Quick preview of all snippets on your Clipboard for easy access.
</p>
</div>
</div>
</section>
{/* COMPANY SECTION */}
<section>
  <ul className="my-24 flex flex-col gap-16 align-middle items-center justify-center lg:flex-row lg:gap-24">
    {/* GOOGLE */}
    <li><img src={google} alt="google" /></li>
    {/* IBM */}
    <li><img src={ibm} alt="ibm" /></li>
    {/* MICROSOFT */}
    <li><img src={microsoft} alt="microsoft" /></li>
    {/* HP */}
    <li><img src={hp} alt="hp" /></li>
    {/* VECTOR GRAPHICS */}
    <li><img src={vector} alt="vector" /></li>
  </ul>
</section>
{/* DOWNLOAD SECTION */}
<section className="w-[80%] mx-auto my-24 lg:my-40">
  <h1 className="text-heading font-semibold text-4xl">
Clipboard for iOS and Mac OS
</h1>
<p className="text-text lg:w-[60%] leading-7 tracking-wide mt-6 mx-auto">
Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
and you’re ready to start adding to your clipboard.
</p>
<div className="flex flex-col lg:flex-row mt-8 gap-6 w-[100%] justify-center items-center align-middle">
  <button className="bg-primary font-semibold shadow-lg text-white w-[100%] p-3 rounded-full hover:opacity-70 hover:cursor-pointer lg:w-[20%]">
Download for iOS
</button>
<button className="bg-secondary shadow-lg text-white font-semibold w-[100%] p-3 rounded-full hover:opacity-70 hover:cursor-pointer lg:w-[20%]">
Download for Mac
</button>
</div>
</section>
{/* FOOTER */}
<footer className="text-text font-normal flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center lg:align-middle lg:pt-8  lg:w-[100%] bg-zinc-100 lg:p-6">
  {/* FOOTER LOGO */}
  <img className="w-20 h-20 my-12 lg:ml-48 lg:w-16 lg:h-16 lg:my-0" src={logo} alt="logo" />
  {/* FOOTER LINKS */}
  <ul className="flex flex-col gap-6 mb-6 lg:grid lg:grid-cols-3 lg:mx-28 lg:text-left">
    <li className="text-heading hover:text-primary hover:cursor-pointer">
FAQs
</li>
<li className="text-heading hover:text-primary hover:cursor-pointer">
Contact Us
</li>
<li className="text-heading hover:text-primary hover:cursor-pointer">
Privacy Policy
</li>
<li className="text-heading hover:text-primary hover:cursor-pointer">
Press Kit
</li>
<li className="text-heading hover:text-primary hover:cursor-pointer">
Install Guide
</li>
</ul>
{/* SOCIAL LINKS */}
<ul className="flex items-center gap-12 my-8 pb-4 lg:ml-24">
  {/* FACEBOOK */}
  <li ><svg className="fill-[#4C545C] hover:fill-primary hover:cursor-pointer " width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill-rule="nonzero"/></svg></li>
  {/* TWITTER */}
  <li><svg className="fill-[#4C545C] hover:fill-primary hover:cursor-pointer " width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill-rule="nonzero"/></svg></li>
  {/* INSTAGRAM */}
  <li><svg className="fill-[#4C545C] hover:fill-primary hover:cursor-pointer " width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"  fill-rule="nonzero"/></svg></li>
</ul>
</footer>
</main>
    </div>
  );
}

export default App;
