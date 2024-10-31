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
