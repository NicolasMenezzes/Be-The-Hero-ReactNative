import {StyleSheet} from "react-native"
import Constants from "expo-constants"


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#15202B"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#1D344B",
        marginBottom: 20,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: "#F0F8FF",
        fontWeight: "bold",
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#CDCECF"
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#1D344B",
        marginBottom: 20,
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#F0F8FF",
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: "#CDCECF",
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
     
    action: {
        backgroundColor: "#e02041",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    actionText: {
        color: "#F0F8FF",
        fontSize: 15,
        fontWeight: "bold"
    }


})