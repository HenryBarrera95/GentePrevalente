module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: 
  {
    fontFamily:{
      'Roboto':['Roboto']
    },

    boxShadow:{
      box: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    },

    screens: {
      'default': '640px',
      'lg':'1440px'
    },

    extend: {
      colors: {
        'navbar-gray': '#2F3337',
        'grayGDM': '#E5E7EB',
        'BlueGDM': '#26B4FF'
      },

      fontSize:{
        subtext:['12px','14.06px'],
        mbox:['24px','28px'],
        box:['36px','42px'],
        brain: ['16px','19px'],
        anch:['14px','16px'],
        FaSize:['40px'],
        Fa2Size:['56px']
      },

      spacing:{
        sp1:'1px',
        sp6:'6px',
        sp8:'8px',
        sp11:'11px',
        sp12:'12px',
        sp14:'14px',
        sp15:'15px',
        sp16:'16px',
        sp18:'18px',
        sp20:'20px',
        sp24:'24px',
        sp27:'27px',
        sp33:'33px',
        sp34:'34px',
        sp30:'30px',
        sp40:'40px',
        sp45:'45px',
        sp57:'57px',
        sp61:'61px',
        sp62:'62px',
        sp67:'67px',
        sp74:'74px',
        sp75:'75px',
        sp80:'80px',
        sp94:'94px',
        sp96:'96px',
        sp104:'104px',
        sp108:'108px',
        sp110:'110px',
        sp114:'114px',
        sp115:'115px',
        sp119:'119px',
        sp130:'130px',
        sp132:'132px',     
        sp140:'140px',
        sp145:'145px',
        sp175:'175px',
        sp237:'237px',
        sp260:'260px',
        sp330:'330px',
        sp345:'345px',
        sp390:'390px',
        sp457:'457px',
        sp550:'550px',     
      },

    },


  },

  variants: {
    extend: {},
  },
  plugins: [],
}
