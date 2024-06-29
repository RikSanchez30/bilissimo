import { useState } from "react";

const Header = () => {

  let [menu, setMenu] = useState(false)
  let [lang, setLang] = useState(false)
  let [accord, setAccord] = useState(false)
  let [region, setRegion] = useState('Xorazm')
  let [tab, setTab] = useState(false)
  let [burger, setBurger] = useState(false)

  let Menu = () => {

    setMenu(!menu)

  }
  let Region = (index) => {

    let arr = ['Xorazm', 'Andijon', 'Samarqand', 'Qo\'qon', 'Farg\'ona', 'Chirchiq','Namangan', 'Buxoro', 'Olmaliq', 'Nurafshon', 'Angren','Yangiqul','Toshkent']

    if (region === index) {
      setRegion(null)
    } else {
      setRegion(arr[index])
    }



  }




  return (
    <>
      <header className="flex w-[85%] m-auto gap-4 h-[80px]  items-center justify-between">


<img onClick={() => setBurger(!burger)}  className="w-[40px] select-none cursor-pointer" src="/burger.svg" alt="" />
        
  <div className={` ${ burger ? 'translate-x-[-130%]' : 'left-100%' } transition-all duration-700 flex p-[30px] flex-col gap-9 pt-90px bg-white fixed top-0 left-0 w-[80%] laptop:hidden tablet:w-[55%] h-screen`}>        
      
  <img onClick={() => setBurger(!burger)} className={`w-8 cursor-pointer absolute z-10 right-[-60px] transition-all duration-700 ${ !burger ? 'transform  rotate-[1260deg] ' : '' } `} src="/xm.svg" alt="" />

          <div className={` w-full h-[50px] rounded-[30px] overflow-hidden transition-all duration-300  ${accord ? 'h-[680px]' : 'h-[60px]'}`}>
            <div onClick={() => setAccord(!accord)} className={` ${accord ? ' shadow-[1px_1px_40px_0.1px_rgba(0,0,0,0.1),_1px_1px_30px_4px_rgba(45,78,155,0.15)]' : 'flex'}  transition-all duration-500 flex cursor-pointer w-full h-[50px] px-[15px] rounded-xl justify-between bg-[#f6f6f7]  items-center`}>

              <p className="select-none font-[600] text-[20px]"> {region} </p>
              <img className={` transition-all duration-500 select-none  ${accord ? ' rotate-180' : 'rotate-0'} transition-all duration-200 transform rounded-[50%] w-8`} src="\arrow-drop-down-svgrepo-com.png" alt="" />

            </div>

            <div>
              <ul className="text-[23px]  select-none cursor-default font-medium flex flex-col gap-3 pt-4" >
                <li className="w-full" onClick={() => Region(0)}>Xorazm</li>
                <li className="w-full" onClick={() => Region(1)}>Andijon</li>
                <li className="w-full" onClick={() => Region(2)}>Samarqand</li>
                <li className="w-full" onClick={() => Region(3)}>Qo'qon</li>
                <li className="w-full" onClick={() => Region(4)}>Farg'ona</li>
                <li className="w-full" onClick={() => Region(5)}>Chirchiq</li>
                <li className="w-full" onClick={() => Region(6)}>Namangan</li>
                <li className="w-full" onClick={() => Region(7)}>Buxoro</li>
                <li className="w-full" onClick={() => Region(8)}>Olmaliq</li>
                <li className="w-full" onClick={() => Region(9)}>Nurafshon</li>
                <li className="w-full" onClick={() => Region(10)}>Angren</li>
                <li className="w-full" onClick={() => Region(11)}>Yangiqul</li>
                <li className="w-full" onClick={() => Region(12)}>Toshkent</li>
              </ul>

          
            </div>
              
          </div>
          <div className=" text-[30px] font-[600] h-[120px] px-5 rounded-[15px] flex flex-col justify-around bg-[#f6f6f7]">       
                   <p>Kirish</p>
              </div>
          <div className=" text-[23px] font-[600] h-[100px] px-5 rounded-[15px] flex flex-col justify-around bg-[#f6f6f7]">
                 <div className="border-b pb-3">
                   <p>Menu</p>
                 </div>
                 <div>
                   <p>Restaurant</p>
                 </div>
              </div>
              <div className=" text-[30px] font-[600] h-[120px] px-5 rounded-[15px] flex flex-col justify-around bg-[#f6f6f7]">       
                   <p>Aksiya</p>
              </div>
              <div className=" text-[25px] font-[600] h-[70px] px-5 rounded-[15px] flex flex-col justify-around bg-[#f6f6f7]">       
                   <p>Bizga Qong'iroq</p>
              </div>

              <div className="text-[22px] select-none">
                <h2>Til</h2>
                
                <div className="flex  cursor-pointer  bg-[#f6f6f7] h-[70px] w-full rounded-[30px] items-center font-[500] justify-evenly">
                  <div  className={ ` transition-all duration-500 ${ tab ? 'left-[50%]' : 'right-[50%]'} bg-[#ffffff] w-[50%] left-2 absolute z-[0] h-[60px] rounded-[30px] `}></div>
                  <div onClick={() => setTab(false)} className="relative z-[1] text-[19px] w-1/3">O'zbek Tili</div>
                  <div onClick={() => setTab(true)} className="relative z-[1] text-[18px] w-1/3">Русский язык</div>
                </div>
              </div>
        </div>

        <div className="flex  items-center gap-8">
          <img className="w-[230px] hidden laptop:block " src="/logo-belissimo.webp" alt="" />
          <div className=" items-center gap-4 hidden desktop:flex ">
            <a className="flex bg-[#ecfdf5] w-[40px] h-[45px]" href="https://maps.google.com" target="_blank" >

              <img className="w-[60px]" src="/location.svg" alt="" />
            </a>
            <div>
              <p className="text-[18px]">Shahar: </p>
              <b className="text-[18px]">Tashkent </b>
            </div>
          </div>
          <div className=" gap-4 -2 hidden desktop:flex  items-center">
            <a className="flex bg-[#ecfdf5] w-[140px] h-[45px] gap-3 text-[25px] font-[500] text-[#047857] items-center" href="#"> <img className="w-[25px]" src="/phone-call-svgrepo-com.svg" alt="" /> 1174</a>
            <p className="text-[18px]">Yagona aloqa markazi</p>

          </div>
          <div className="desktop:flex gap-4 items-center hidden">
            <b className="text-[25px] bg-[#ecfdf5] w-[100px] h-[45px] text-[#047857]">24/7</b>
            <p className="text-[18px]">  Bepul yetkazish endi 24/7 mavjud</p>
          </div>
        </div>
        <div className=" hidden laptop:flex items-center gap-9">

          <div>
            <div>
              <b className="text-[20px] cursor-pointer" onClick={Menu} >{lang ? 'Ru' : "Uz"}</b>
            </div>
            <div className={` ${menu ? "opacity-1" : "opacity-0"} transition-all duration-500 right-[350px] top-[80px] absolute border flex flex-col items-center justify-center rounded-[10px] text-[20px] p-3 px-6 `} >
              <b className={` cursor-pointer ${lang ? 'block' : 'hidden'} `} onClick={() => setLang(false)}> 🇺🇿 </b>
              <b className={` cursor-pointer ${lang ? 'hidden' : 'block'} `} onClick={() => setLang(true)}> 🇷🇺 </b>
            </div>
          </div>



          <img className="w-[50px] h-[50px]" src="/halal.webp" alt="" />

          <button className="bg-[#047857] hidden laptop:block text-white w-[130px] rounded-3xl text-[20px] h-[50px] ">Kirish</button>
        </div>
      </header>
    </>
  )

};

export default Header;
