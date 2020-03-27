import {StyleSheet} from "react-native"
import Constants from "expo-constants"


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#15202B"
    },

    header : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    headerText : {
        fontSize: 15,
        color: "#B5B5B5",
    },

    headerTextBold : {
        fontWeight : "bold"
    },

    title: {
        fontSize: 30,
        marginBottom: 5,
        marginTop: 48,
        color: "#F0F8FF",
        fontWeight: "bold"
    },

    description: {
        fontSize: 16,
        lineHeight: 24, 
        color: "#B5B5B5",
        marginBottom: 10
    },

    incidentList: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#1D344B",
        marginBottom: 20,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#F0F8FF",
        fontWeight: "bold"
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#CDCECF"
    },

    detailsButton : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    detailsButtonText: {
        color: "#e02041",
        fontSize: 15,
        fontWeight: "bold"

    }





})