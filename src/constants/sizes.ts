import { Dimensions } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const paddingTop = getStatusBarHeight();
const paddingBottom = getBottomSpace();
const paddingHorizontal = horizontalScale(35);

export const SIZES = {
  width: width,
  height: height,
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  horizontalScale,
  verticalScale,
  moderateScale,
};
