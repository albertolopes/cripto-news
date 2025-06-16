import React from "react";

export default function AdBanner() {
    return (
        <div className="flex flex-col items-center my-6">
            <iframe
                data-aa="2398944"
                src="//ad.a-ads.com/2398944?size=300x250"
                style={{
                    width: "300px",
                    height: "250px",
                    border: "0px",
                    padding: "0",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                }}
                title="a-ads"
                scrolling="no"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
            <a
                className="text-xs text-gray-500 mt-1"
                href="https://aads.com/campaigns/new/?source_id=2398944&source_type=ad_unit&partner=2398944"
                target="_blank"
                rel="noopener noreferrer"
            >
                Advertise here
            </a>
        </div>
    );
}
