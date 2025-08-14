import React from "react";

export default function AdBanner() {
    const html = `
        <div id="frame" style="width: 300px;"><iframe data-aa='2398959' src='https://ad.a-ads.com/2398959?size=300x250' style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe><a style="display: block; text-align: right; font-size: 12px" id="frame-link" href="https://aads.com/campaigns/new/?source_id=2398959&source_type=ad_unit&partner=2398959">Advertise here</a></div>
    `;

    return (
        <div className="flex justify-center items-center my-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
