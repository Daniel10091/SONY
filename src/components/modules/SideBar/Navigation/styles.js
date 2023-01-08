import { StyleSheet } from 'react-native';
import { Theme } from '../../../../constants';

const Navigation = Theme.Sizes.SideBar.Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  item: {
    width: Navigation.width,
    height: Navigation.height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Navigation.Item.paddingHorizontal,
    marginVertical: Navigation.Item.marginVertical,
  },
  icon: {
    fontSize: Navigation.Item.Icon1,
    color: Theme.Colors.Cultured,
  },
  label: {
    marginLeft: Navigation.Item.gapSpace,
    color: Theme.Colors.Cultured,
  },
});

export default styles;
