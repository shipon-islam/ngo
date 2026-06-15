import { Icon } from "@iconify/react";
import Button from "./Button";

export default function CausesCard({ causes }) {
  return (
    <div
      className={`${causes.layout === "verticle" ? "sm:col-span-2  " : "col-span-1"}`}
    >
      <div
        className={`bg-warm rounded-cs overflow-hidden  ${causes.layout === "verticle" ? "grid sm:grid-cols-2" : ""}`}
      >
        <div
          className={`w-full  bg-black ${causes.layout === "verticle" ? "sm:h-full! h-57.25 sm:min-h-155" : "h-57.25"}`}
        />
        <div
          className={` flex flex-col justify-between ${causes.layout === "verticle" ? "px-3 py-5 sm:px-8 sm:py-7" : "px-3 py-5"}`}
        >
          <div>
            <p className="font-medium text-deepgreen">{causes.category}</p>
            <p className="font-semibold my-4">{causes.title}</p>
            <p>{causes.desc}</p>
          </div>
          <div className="mt-4">
            <div>
              <div className="flex items-center  gap-1 font-semibold">
                <span className="flex items-center">
                  ৳{causes.donation.risen.toLocaleString()}
                </span>{" "}
                /{" "}
                <span className="flex items-center">
                  ৳{causes.donation.target.toLocaleString()}
                </span>{" "}
                raised
              </div>
              <div className="bg-white h-2.25 rounded-full relative overflow-hidden my-4">
                <span
                  style={{
                    width:
                      (causes.donation.risen / causes.donation.target) * 100 +
                      "%",
                  }}
                  className="bg-deepgreen block h-full absolute top-0 left-0 rounded-full"
                />
              </div>
            </div>

            <div className="flex gap-2 lg:gap-x-6 my-5 text-sm capitalize">
              <p className="flex items-center gap-1">
                <Icon icon="bx:male" width="32" height="32" />
                <span>{causes.donors} donors</span>
              </p>
              <p className="flex items-center gap-1">
                <Icon icon="boxicons:location-filled" width="28" height="28" />
                <span>{causes.location}</span>
              </p>
              <p className="flex items-center gap-1">
                <Icon icon="mdi:clock-outline" width="27" height="27" />
                <span>{causes.date}</span>
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <Button size="small" type="outline">
                Donate
              </Button>
              <Button size="small" type="outline">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
