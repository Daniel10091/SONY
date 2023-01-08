import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

const SideBar = Theme.Sizes.SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SideBar.width,
    height: SideBar.height,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SideBar.paddingHorizontal,
    paddingVertical: SideBar.paddingVertical,
    backgroundColor: Theme.Colors.RaisinBlack1,
  },

  // Logo styles
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  logoText: {
    fontSize: SideBar.Logo.fontSize,
    color: Theme.Colors.Manatee,
    letterSpacing: SideBar.Logo.letterSpacing,
  },

  // Navigation styles
  navigationContainer: {
    flex: 1,
    // width: '100%',
  },

  // BottomBar styles
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeAppButton: {
    width: SideBar.BottomButtons.width,
    height: SideBar.BottomButtons.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeAppButtonIcon: {
    fontSize: SideBar.BottomButtons.iconFontSize,
    color: Theme.Colors.BrickRed,
  },
});

export default styles;
