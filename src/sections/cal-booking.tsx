"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#002BBA" }, "dark": { "cal-brand": "#fafafa" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return <Cal namespace="30min"
        calLink="bhyte/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: "2rem" }}
        config={{ "layout": "month_view", "theme": "light" }}
    />;
};
