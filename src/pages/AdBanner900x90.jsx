import React from "react";

export default function AdBanner900x90() {
    const html = `
        <div id="frame" style="width: 970px;"><iframe data-aa='2398964' src='//ad.a-ads.com/2398964?size=970x90' style='width:970px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe><a style="display: block; text-align: right; font-size: 12px" id="frame-link" href="https://aads.com/campaigns/new/?source_id=2398964&source_type=ad_unit&partner=2398964">Advertise here</a></div>
    `;

    return (
        <div className="flex justify-center items-center my-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
