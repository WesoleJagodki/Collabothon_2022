import React from "react";
import { Button, Image } from "native-base"

import { footer_style } from "./FooterStyle";

export enum FooterPage {
    HOME = 1,
    QUESTS,
    TICKETS,
    MAP,
    INFO
}

interface Props {
    navigation: any;
    page: FooterPage;
    isSelected: boolean;
}

const footerImages = {
    footer1: require("../../images/footer-1.png"),
    footer2: require("../../images/footer-2.png"),
    footer3: require("../../images/footer-3.png"),
    footer4: require("../../images/footer-4.png"),
    footer5: require("../../images/footer-5.png"),
    footer1selected: require("../../images/footer-1-selected.png"),
    footer2selected: require("../../images/footer-2-selected.png"),
    footer3selected: require("../../images/footer-3-selected.png"),
    footer4selected: require("../../images/footer-4-selected.png"),
    footer5selected: require("../../images/footer-5-selected.png")
};

const targets = {
    footer1: "MainScreen",
    footer2: "AchievementsScreen",
    footer3: "TicketsScreen",
    footer4: "MapScreen",
    footer5: "InfoScreen"
};

export const FooterItem = function ({ navigation, page, isSelected }: Props): JSX.Element {
    return (
        <Button onPress={() => navigation.navigate(targets[`footer${page}`])} style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
            <Image
                style={footer_style.picture}
                source={footerImages[`footer${page}${isSelected ? "selected" : ""}`]}
                alt="Orientarium ZOO Łódź"
            />
        </Button>
    );
};
