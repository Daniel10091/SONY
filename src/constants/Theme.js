const Colors = {
  // Background colors
  RaisinBlack1: '#1D202B',
  RaisinBlack2: '#1F212C',
  RaisinBlack3: '#262835',
  Independence: '#48516C',

  // Font colors
  Manatee: '#A0A4B5',
  Cultured: '#F2F4F8',

  // Primary colors
  MajorelleBlue: '#624FE5',
  BrickRed: '#D23F5C',
}

const Sizes = {
  // *** SideBar Sizes ***
  SideBar: {
    width: 340,
    height: '100%',
    paddingHorizontal: 50,
    paddingVertical: 20,
    // Logo sizes
    Logo: {
      fontSize: 20,
      letterSpacing: 8,
    },
    // Navigation sizes
    Navigation: {
      width: '100%',
      height: 50,
      Item: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 20,
        gapSpace: 20,
        Icon1: 20,
        Icon2: 24,
        Icon3: 30,
        IconActive: 34,
        Label1: 20,
        Label2: 24,
        Label3: 30,
        LabelActive: 34,
      },
    },
    // BottomBar Sizes
    BottomButtons: {
      width: 40,
      height: 40,
      iconFontSize: 30, 
    }
  },

}

export {
  Colors, 
  Sizes 
}
