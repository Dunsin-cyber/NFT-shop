import { Text, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				width: 40,
				backgroundColor: COLORS.white,
				height: 40,
				position: "absolute",
				borderRadius: SIZES.extraLarge,
				alignItems: "center",
				justifyContent: "center",
				...SHADOWS.dark,
				...props,
			}}
			onPress={handlePress}
		>
			<Image
				source={imgUrl}
				resizeMode='contain'
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.primary,
				borderRadius: SIZES.extraLarge,
				minWidth: minWidth,
				padding: SIZES.small,
				...props,
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: fontSize,
					color: COLORS.white,
					textAlign: "center",
				}}
			>
				Place a bid
			</Text>
		</TouchableOpacity>
	);
};
