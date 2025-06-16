import React from "react";

export default function AdBanner() {
    return (
        <div
            id="frame"
            style={{ width: "300px", height: "auto" }}
            className="mx-auto my-6"
        >
            <iframe
                data-aa="2398944"
                src="https://ad.a-ads.com/2398944?size=300x250"
                style={{
                    width: "300px",
                    height: "250px",
                    border: "0",
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
                id="preview-link"
                style={{ display: "block", textAlign: "right", fontSize: "12px" }}
                href="https://aads.com/campaigns/new/?source_id=2398944&source_type=ad_unit&partner=2398944"
                target="_blank"
                rel="noopener noreferrer"
            >
                Advertise here
            </a>
        </div>
    );
}
