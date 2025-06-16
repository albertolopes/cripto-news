import React from "react";

export default function AdBanner() {
    const html = `
        <div style="width: 300px;">
            <iframe 
                data-aa='2398944' 
                src='//ad.a-ads.com/2398944?size=300x250' 
                style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'>
            </iframe>
            <a 
                style="display: block; text-align: right; font-size: 12px" 
                href="https://aads.com/campaigns/new/?source_id=2398944&source_type=ad_unit&partner=2398944"
                target="_blank" 
                rel="noopener noreferrer"
            >
                Advertise here
            </a>
        </div>
    `;

    return (
        <div className="flex justify-center items-center my-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
