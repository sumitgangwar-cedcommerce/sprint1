import { Frame, Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  StoreMajor,
  CirclePlusOutlineMinor,
  CustomersMajor,
  AnalyticsMajor,
  MarketingMajor,
  DiscountsMajor,
  AppsMajor,
  PointOfSaleMajor,
  MarketsMajor,
  SettingsMajor,
} from "@shopify/polaris-icons";
import React from "react";

const NavBar = () => {
  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: "/path/to/place",
              label: "Home",
              icon: HomeMinor,
            },
            {
              url: "/path/to/place",
              label: "Orders",
              icon: OrdersMinor,
              badge: '15'
            },
            {
              url: "/path/to/place",
              label: "Products",
              icon: ProductsMinor,
            },
            {
              url: "/path/to/place",
              label: "Customer",
              icon: CustomersMajor,
            },
            {
              url: "/path/to/place",
              label: "Analytics",
              icon: AnalyticsMajor,
            },
            {
              url: "/path/to/place",
              label: "Marketing",
              icon: MarketingMajor,
            },
            {
              url: "/path/to/place",
              label: "Discount",
              icon: DiscountsMajor,
            },
            {
              url: "/path/to/place",
              label: "Apps",
              icon: AppsMajor,
            },
          ]}
        />
        <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: "/path/to/place",
              label: "Online Store",
              icon: StoreMajor,
            },
            {
              url: "/path/to/place",
              label: "Point of sale",
              icon: PointOfSaleMajor,
            },
            {
              url:"",
              label: 'Amazon by Cedcommerce',
              icon: MarketsMajor,
              subNavigationItems: [
                {
                  url: '',
                  label: 'Overview',
                  selected:false
                },
                {
                  url: '',
                  label: 'Listing',
                },
                {
                  url: '',
                  label: 'Product Linking',
                },
                {
                  url: '',
                  label: 'Settings',
                  selected:true
                },
                {
                  url: '',
                  label: 'FAQ',
                },
              ],
            },
          ]}
          action={{
            accessibilityLabel: "Add sales channel",
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
        <Navigation.Section 
          items={[
            {
              label:'Settings',
              icon: SettingsMajor
            }
          ]}
        />
      </Navigation>
    </Frame>
  );
}

export default NavBar;
