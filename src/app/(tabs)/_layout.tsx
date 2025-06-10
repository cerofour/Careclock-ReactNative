import { Tabs } from "expo-router";
import { COLORS } from "../../components/colors";
import { Platform } from "react-native";
import IconComponent from "../../components/core/icons/IconComponent";

function TabLayout() {
	return (
		<Tabs initialRouteName="(calendar)/index" screenOptions={({ route }) => ({
			headerShown: true,
			headerShadowVisible: false,
			headerStyle: {
				backgroundColor: COLORS.background
			},
			headerTitleStyle: {
				fontSize: 30,
				color: COLORS.primary
			},
			tabBarActiveTintColor: COLORS.primary, 
			tabBarInactiveTintColor: COLORS.gray,
			tabBarActiveBackgroundColor: Platform.select({web: 'white'}),
			tabBarPosition: Platform.select({web: 'left'}),
			tabBarIcon: ({ focused, color, size }) => {
				let iconName: any;

				switch(route.name) {
					case '(calendar)/index': 
						iconName = 'CalendarDots';
						break;
					case '(progress)/index':
						iconName = 'ChartLineUp';
						break;
					case '(profile)/index':
						iconName = 'User';
						break;
					case '(add)/index':
						iconName = 'PlusCircle';
						break;
				}

				return (<IconComponent name={iconName} size={size*1.3} color={color} weight="fill" />);
			}
		})}>
			<Tabs.Screen 
				name="(calendar)/index" 
				options={{title: "Hoy"}}
			/>
			<Tabs.Screen 
				name="(progress)/index"
				options={{title: "Progreso"}}
			/>
			<Tabs.Screen 
				name="(add)/index"
				options={{title: "Agregar"}}
			/>
			<Tabs.Screen 
				name="(profile)/index"
				options={{title: "Perfil"}}
			/>
		</Tabs>
	);
}

export default TabLayout;