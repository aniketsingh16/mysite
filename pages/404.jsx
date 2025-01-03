import React, { useEffect } from "react";
import Link from "next/link";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";

import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },
    {
        id: 2,
        text: " 404",
    },
];

function Error({}) {
    return (
        <Container title="Page not found">
            <div className="ps-page ps-page--inner ps-page--notfound">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <div className="row mb-80">
                            <div className="col-12 col-md-6 col-lg-5">
                                <img
                                    src="/static/img/cartoon-doctor.jpg"
                                    alt="cartoon-doctor"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                                <h1 className="ps-page__name">404</h1>
                                <h5>
                                    This page has been probably moved
                                    somewhere.. ¯\_(ツ)_/¯
                                </h5>
                                <p>
                                    Please back to homepage or check our offer
                                </p>
                                <div>
                                    <Link href="/" legacyBehavior>
                                        <a className="ps-btn ps-btn--primary">
                                            Back to homepage
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <LatestProducts />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Error;
