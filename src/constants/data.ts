import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons/";
import { ImageProps } from "react-native";
import images from "@src/constants/images";

export type IconTypes =
  | keyof typeof AntDesign.glyphMap
  | keyof typeof Feather.glyphMap
  | keyof typeof MaterialCommunityIcons.glyphMap
  | keyof typeof Entypo.glyphMap;

export type IconProvider =
  | "AntDesign"
  | "Feather"
  | "MaterialCommunityIcons"
  | "Entypo";

export type trendsPropType = {
  type: string;
  amount: string;
};

export type weeklyChallengePropType = {
  name: string;
  image: ImageProps;
};

export type linkedBankPropType = {
  bank: string;
  logo: ImageProps;
  amount: string;
  percentage: string;
};

export type OthersPropType = {
  feature: "Linked" | "Budget";
  logo: ImageProps;
  desc: string;
};

export type recentTransferPropType = {
  name: string;
  logo: ImageProps;
};

export type recentTransferVerticalPropType = {
  title: string;
  data: {
    name: string;
    logo: ImageProps;
  }[];
};

export type paymentDetailsPropType = {
    name: string,
    value: string;  
};
export type ListPropType = {
    name: string,
    iconName: IconTypes;  
    iconProvider: IconProvider;  
}

export type MorePropType = {
    name: string;
    desc: string;
    iconName: IconTypes;  
    iconProvider: IconProvider;  
    backgroundColor: string;
    color: string;
};

export type cardDetailsPropType = {
    name: string;
    desc: string;
};

export type lifeStylePropType = {
  name: string;
  iconName: IconTypes;  
  iconProvider: IconProvider;  
};
export const lifeStyleData:lifeStylePropType[] =[
  {
    name: "Airtime",
    iconName: "phone",  
    iconProvider: "MaterialCommunityIcons"
  },
  {
    name: "Internet",
    iconName: "globe",  
    iconProvider: "Entypo"
  },
  {
    name: "Electricity",
    iconName: "power",  
    iconProvider: "MaterialCommunityIcons"
  },
  {
    name: "Transportation",
    iconName: "truck",  
    iconProvider: "Feather"
  },
  {
    name: "TV",
    iconName: "television",  
    iconProvider: "MaterialCommunityIcons"
  },
  {
    name: "Education",
    iconName: "graduation-cap",  
    iconProvider: "Entypo"
  },
  {
    name: "Refer & Earn",
    iconName: "dollar-sign",  
    iconProvider: "Feather"
  },
  {
    name: "Loan",
    iconName: "cash-multiple",  
    iconProvider: "MaterialCommunityIcons"
  },
  {
    name: "ATM Card",
    iconName: "credit-card",  
    iconProvider: "Entypo"
  },
  {
    name: "Budget",
    iconName: "wallet",  
    iconProvider: "Entypo"
  },
  {
    name: "Invitation",
    iconName: "calendar-plus",  
    iconProvider: "MaterialCommunityIcons"
    // mail
  },
  {
    name: "Gift Card",
    iconName: "wallet",  
    iconProvider: "AntDesign"
  },
];

export const cardDetailsData: cardDetailsPropType[] = [
  {
    name: "Card Name",
    desc: "Luis Marinelli",
  },
  {
    name: "Card Number",
    desc: "6667 3432 3456 9982",
  },
  {
    name: "CVV",
    desc: "877",
  },
  {
    name: "Expiry Date",
    desc: "09/28",
  },
  {
    name: "Billing Address",
    desc: "11 calle 12-38 z. 10, Guatemala City, Guatemala",
  },
  {
    name: "ZIP code",
    desc: "19446",
  },
]

export const MoreData:MorePropType[] = [
  {
    name: "Withdraw Funds",
    desc: "Withdraw from your card into accounts",
    iconName: "snowflake",
    iconProvider: 'MaterialCommunityIcons',
    backgroundColor: "#27201A",
    color: "#EDAF39"
  },
  {
    name: "Card Statement",
    desc: "Get a statement for all part of your transaction",
    iconName: "credit-card-multiple-outline",
    iconProvider: "MaterialCommunityIcons",
    backgroundColor: "#1A2722",
    color: "#FFFFFF"
  },

  {
    name: "Delete your card",
    desc: "Instantly terminate your cards",
    iconName: "trash-2",
    iconProvider: "Feather",
    backgroundColor: "#27201A",
    color: "#9E00FF"
  },
];

export const paymentDetailsData:paymentDetailsPropType[] = [
 {
  name: 'Ref Number',
  value: '000085752257'
 },
 {
  name: 'Payment Time',
  value: '25-02-2023, 13:22:16'
 },
 {
  name: 'Payment Method',
  value: 'Bank Transfer'
 },
 {
  name: 'Recipient Name',
  value: 'Adriana Ruano'
 },
 {
  name: 'Recipient Account Number',
  value: ''
 },
 {
  name: 'Recipient Bank',
  value: ''
 },
];

export const listData:ListPropType[] = [
    {
      name: "Details",
      iconName: "infocirlceo",
      iconProvider: 'AntDesign',
    },
    {
      name: "Pay",
      iconName: "plus",
      iconProvider: "Feather",
    },

    {
      name: "Freeze",
      iconName: "snowflake",
      iconProvider: "MaterialCommunityIcons",
    },
    {
      name: "More",
      iconName: "dots-three-horizontal",
      iconProvider: "Entypo",
    },
  ];

export const recentTransfeVerticalData: recentTransferVerticalPropType[] = [
  {
    title: "a",
    data: [
      {
        name: "AAA Finance",
        logo: images.transfer.AAAFinance,
      },
    ],
  },
  {
    title: "b",
    data: [
      {
        name: "Bam",
        logo: images.transfer.bam,
      },
      {
        name: "Banco Industrial",
        logo: images.transfer.bancoIndustry,
      },
      {
        name: "Banco Inmobiliarioam",
        logo: images.transfer.bancoInmobiliario,
      },
      {
        name: "Bantrab",
        logo: images.transfer.bantrab,
      },
    ],
  },
  {
    title: "i",
    data: [
      {
        name: "Interbanco",
        logo: images.transfer.interbanco,
      },
    ],
  },
];

export const recentTransferData: recentTransferPropType[] = [
  {
    name: "Concavo",
    logo: images.transfer.concavo,
  },
  {
    name: "Banco Industrial",
    logo: images.transfer.bancoIndustry,
  },
  {
    name: "Bam",
    logo: images.transfer.bam,
  },
  {
    name: "GTC",
    logo: images.transfer.GTC,
  },
];

// export interface QuicklinkProps {
//   icon: IconTypes;
//   name: string;
//   href: keyof QuickLinksRootStackParamList;
//   iconProvider: IconProvider;
// }

export const TrendsData: trendsPropType[] = [
  {
    type: "Income",
    amount: "Q 300 / month",
  },
  {
    type: "Expenses",
    amount: "Q 300 / month",
  },
  {
    type: "Debt",
    amount: "Q 300 / month",
  },
  {
    type: "Net cash",
    amount: "Q 300 / month",
  },
];
export const weeklyChallengeData: weeklyChallengePropType[] = [
  {
    name: "Zero Debt",
    image: images.challenge.cartoon,
  },
  {
    name: "No fast food expenses",
    image: images.challenge.cart,
  },
  {
    name: "Income Increases",
    image: images.challenge.rocket,
  },
];
export const MoneyTransferOptions: weeklyChallengePropType[] = [
  {
    name: "To Bank",
    image: images.MoneyTransfer.bank,
  },
  {
    name: "To Concavo",
    image: images.MoneyTransfer.concavo,
  },
  {
    name: "Withdraw",
    image: images.MoneyTransfer.withdraw,
  },
];

export const LinkedBankData: linkedBankPropType[] = [
  {
    bank: "Bam",
    logo: images.LinkedBank.bam,
    amount: "Q29,340.20",
    percentage: "25%",
  },
  {
    bank: "Interbanko",
    logo: images.LinkedBank.Interbanko,
    amount: "Q29,340.20",
    percentage: "25%",
  },
];
export const OthersData: OthersPropType[] = [
  {
    feature: "Linked",
    logo: images.others.link,
    desc: "Link external account",
  },
  {
    feature: "Budget",
    logo: images.others.bag_tick,
    desc: "Set a budget to save expenses",
  },
];
