const config = {
  property: {
    streetAddress: "11 Glen Abbey Tr",
    city: "Vaughan",
    cityStateZip: "Vaughan, ON L4H 4K4", // Used in form submission data
    heroSubtitle: "Epitome of Luxury and Grandeur in the exclusive Kleinburg Area. Register to receive the complete property compendium, virtual tour, and comparables.",
    backgroundImageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    price: "$3,148,800",
    beds: "4+2 Beds",
    baths: "6",
    homeType: "Freehold",
    brandedMediaLink: "https://istreetrealty.ca/",
    propertyListing: "https://app.realmmlp.ca/s?active=TREB-N11969605&is_map_search=true&ne_lat=43.83479654795312&ne_lng=-79.6384699174286&offset=1&q=treb%2Favailability%3AA%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY&sw_lat=43.82978137717714&sw_lng=-79.64690278257142&z=17",
    floorPlan: "https://www.realtor.ca/l/bQDuo/ka",
    comparables: [
      "https://www.realtor.ca/real-estate/27976844/71-nave-street-vaughan-kleinburg-kleinburg",
      "https://www.realtor.ca/real-estate/28231738/49-appleyard-avenue-vaughan-kleinburg-kleinburg",
      "https://www.realtor.ca/real-estate/27785830/52-rolling-green-court-vaughan-kleinburg-kleinburg",
      "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11889978&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
      "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11245503&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
      "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N9387032&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16"
    ],
    virtualTour: "https://www.realtor.ca/l/bQDuo/ka"
  },
  realtor: {
    fullName: "iStreet Realty Group",
    title: "Brokerage Team",
    phone: "416-410-2880",
    email: "rick@istreetrealty.ca",
    bio: "At iStreet Realty Group we are built on integrity, insight, and innovation. We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients. With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties. We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing. At iStreet Realty Inc., we’re more than real estate experts—we’re your trusted partner in building your future.",
    photoUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/c68f7f74-a1cf-4af6-a787-cf6c973b557f/headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN2NK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T204230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSQ5g%2BZJ16VKbXmr%2BmCBS9lOyyjUdhoAJI7%2F64%2F%2BY2KAiEA3p%2FcwCLWx%2FRq45X7WroMdbS19OJMMwp3rOCuG7ipN58q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAtNfhxKtQmFhwl78yrcA8KsOPQFBeO9Ucy0sF7xvyB9zurYAiTfAqR7Mp7ervA1BFR25zO1YEXkFWFaeIxXngNAwl3R4OhDPda51GPDrAVvBciuWAOdR9%2FMlGFpXfSLH%2BruR6lDq3gCBgU3N2nmYqrtydgb1lz%2FkhHLBXFNXw7bIxMF9yV0lavE3WsyqkzzVM0%2BG43iooWR2HlXEHptQsMNaqYE4JyoihNd3XiNivgXNpCEonQGabWJRBtEsDwMMUemkjo%2FO4ra1ce%2Bu%2FjmbeiIycREY6OstcY%2BC4QLvN81lbqcD2dH7zyxLk7%2BL391tysFkttctWL94GvPUsG56U5vg%2B6wpB1950om7T%2BDWOVfzFDuW9tC8Jmug0Mv%2FYAqNsaUb7JLXXRTrk%2FMPT1xKX4Sh7b5q0B5%2B6WtRdZE9YukkFkZhreQY7zNXNIx9NBMb07yk0m72C7uYufnFkcJurVvveDxaxyxAPZaJzmQ%2F1lQyNoTS2tW5VZW4KvZmgSN1MIXlFvqx6Cyyn9X8zkPp7YNjNyYSLIfP9ISy5mKoWXwFNLXA6iy8a3Qb0k3N6EyMMbqF2CjJjO7qiDdR%2BwLPcjKY1%2FXppaKTMEuOjHg27EVKmDYiLLp00vMU%2FKBsSzfSzixT61PrKYleMnIMI3p7sAGOqUB82LSYsi3acRfKz4CYQD1qpzQ29EF5kypJdyd9jUzUdRkEaTmTixTLLBkAKnLynkZiYnoVUhCYpMlbPV8U0LooD%2BBurFZZt%2FeDdqGINsAOmmhynQmagsrCV7FIy5c6cPGKdCpWFQD4KTAcG1ENP63gw7Fa7XjEH%2Fx1m3iOOVxoF9I3TVoNT3dUpxirlDvi8uObP3JRHRN8VGjGvPSGUwXLYhrrFOW&X-Amz-Signature=84a21edcabce78e4669a45aa0ef415b3c19cfbc5d962aa76fa880d152ada6919&X-Amz-SignedHeaders=host&x-id=GetObject",
    social: {
      facebook: "https://www.facebook.com/iStreetRealty",
      instagram: "https://www.instagram.com/istreetrealtygroup",
      website: "https://istreetrealty.ca/"
    }
  },
  brokerage: {
    name: "HomeLife Partners",
    logoUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/2ad1f3a4-7cea-45f4-bef2-b56767bf550e/brokeragelogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN2NK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T204230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSQ5g%2BZJ16VKbXmr%2BmCBS9lOyyjUdhoAJI7%2F64%2F%2BY2KAiEA3p%2FcwCLWx%2FRq45X7WroMdbS19OJMMwp3rOCuG7ipN58q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAtNfhxKtQmFhwl78yrcA8KsOPQFBeO9Ucy0sF7xvyB9zurYAiTfAqR7Mp7ervA1BFR25zO1YEXkFWFaeIxXngNAwl3R4OhDPda51GPDrAVvBciuWAOdR9%2FMlGFpXfSLH%2BruR6lDq3gCBgU3N2nmYqrtydgb1lz%2FkhHLBXFNXw7bIxMF9yV0lavE3WsyqkzzVM0%2BG43iooWR2HlXEHptQsMNaqYE4JyoihNd3XiNivgXNpCEonQGabWJRBtEsDwMMUemkjo%2FO4ra1ce%2Bu%2FjmbeiIycREY6OstcY%2BC4QLvN81lbqcD2dH7zyxLk7%2BL391tysFkttctWL94GvPUsG56U5vg%2B6wpB1950om7T%2BDWOVfzFDuW9tC8Jmug0Mv%2FYAqNsaUb7JLXXRTrk%2FMPT1xKX4Sh7b5q0B5%2B6WtRdZE9YukkFkZhreQY7zNXNIx9NBMb07yk0m72C7uYufnFkcJurVvveDxaxyxAPZaJzmQ%2F1lQyNoTS2tW5VZW4KvZmgSN1MIXlFvqx6Cyyn9X8zkPp7YNjNyYSLIfP9ISy5mKoWXwFNLXA6iy8a3Qb0k3N6EyMMbqF2CjJjO7qiDdR%2BwLPcjKY1%2FXppaKTMEuOjHg27EVKmDYiLLp00vMU%2FKBsSzfSzixT61PrKYleMnIMI3p7sAGOqUB82LSYsi3acRfKz4CYQD1qpzQ29EF5kypJdyd9jUzUdRkEaTmTixTLLBkAKnLynkZiYnoVUhCYpMlbPV8U0LooD%2BBurFZZt%2FeDdqGINsAOmmhynQmagsrCV7FIy5c6cPGKdCpWFQD4KTAcG1ENP63gw7Fa7XjEH%2Fx1m3iOOVxoF9I3TVoNT3dUpxirlDvi8uObP3JRHRN8VGjGvPSGUwXLYhrrFOW&X-Amz-Signature=9e1e99ffeabf424cf9762adaa0adece41942b1b7fdedbb158cfefe98e36e6aa6&X-Amz-SignedHeaders=host&x-id=GetObject",
    address: "3850 Steeles Avenue W. Unit 6, Woodbridge, Ontario"
  },
  openHouse: {
    date: "2025-05-10",
    bundleItems: [
      { icon: "fas fa-ruler-combined", text: "Architectural Floor Plan: ", link: "https://www.realtor.ca/l/bQDuo/ka" },
      { icon: "fas fa-star", text: "Benefit: Completely finished Luxurious turn-key home including Finished Basement with kitchen and 2 extra bedrooms and Full Landscaping with pool and cabana with outdoor bathroom" },
      { icon: "fas fa-check-circle", text: "Benefit: New high-end finishes including Full Kitchen, Herringbone flooring, Appliances (SubZero 72\" Side-by-side Fridge/Freezer, Wolf 48 Stove, Bosh DW), Quartz countertop, 2 new furnaces and Air Conditioner, and Full Interlock driveway" },
      { icon: "fas fa-car", text: "3-Car garage, 10 foot ceilings on main, and 9 foot ceilings in basement and 2nd floor" },
      { icon: "fas fa-camera-retro", text: "High-Resolution Photo Album and Virtual Tour", link: "https://www.realtor.ca/l/bQDuo/ka" },
      { icon: "fas fa-film", text: "Cinematic Property Tour Video" },
      { icon: "fas fa-map-location-dot", text: "Kleinburg Neighbourhood Insights & Recent Sales", link: [
        "https://www.realtor.ca/real-estate/27976844/71-nave-street-vaughan-kleinburg-kleinburg",
        "https://www.realtor.ca/real-estate/28231738/49-appleyard-avenue-vaughan-kleinburg-kleinburg",
        "https://www.realtor.ca/real-estate/27785830/52-rolling-green-court-vaughan-kleinburg-kleinburg",
        "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11889978&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
        "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11245503&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
        "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N9387032&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16"
      ] },
      { icon: "fas fa-key", text: "Early Access Notifications for New Kleinburg Listings" }
    ]
  },
  meta: {
    pageTitlePrefix: "🏡 iStreet Open House",
    navBrandLogoText: "iStreet Realty Group",
    privacyPolicyLink: "https://istreetrealty.ca/privacy-policy/"
  },
  settings: {
    webhookUrl: "https://n8n.salesgenius.co/webhook/openhouseupdate",
    confettiColors: [
      '#6187a7', '#f0e9d6', '#ffffff', '#83a363', '#d9ac68'
    ]
  },
  modalQuestions: [
    {
      id: "agent_status",
      questionText: "Are you currently exploring homes with a real estate agent?",
      options: [
        { value: "committed", text: "Yes, I'm committed to an agent." },
        { value: "not_committed", text: "No, I'm not committed to an agent." },
        { value: "gathering_info", text: "Just gathering information at this stage." }
      ]
    }
  ],
  deploymentInfo: {
    repoName: "Open-House-145",
    repoUrl: "https://github.com/arslvn93/Open-House-145",
    tag: "Open House 11 Glen Abbey",
    netlifyUrl: "http://Open-House-145.netlify.app",
    netlifyId: undefined
  }
};