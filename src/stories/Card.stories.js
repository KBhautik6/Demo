import React from "react";
import {Card, CardBadges} from "../Card/Card"

export default{
    title:'Card',
    component:Card,
}

export const Simple_text_only_card=()=><Card />;
export const Card_with_badges=()=><CardBadges/>