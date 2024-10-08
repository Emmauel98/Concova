import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons/";
import { ImageProps } from "react-native";
import images from "@src/constants/images";
import { QuickLinksRootStackParamList } from "@src/components/home/quickLinks";
import { ChatProps, ComplaintProps } from "@src/models/chat";

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

export interface QuicklinkProps {
  icon: IconTypes;
  name: string;
  href: keyof QuickLinksRootStackParamList;
  iconProvider: IconProvider;
}
export interface HousingBillsProps {
  bill_type: string;
  status: "ALREADY DUE" | "DUE IN A FEW DAYS";
  amount: number;
}

export interface RecentChatProps {
  image: ImageProps;
  name: string;
  itemSent: string;
}

export interface RecentActivityProps {
  activityIcon: IconTypes;
  iconProvider: IconProvider;
  activityTag: string;
  activityTitle: string;
  activityDate: string;
  activityAmount?: string;
}

export type transactionProps = {
  name: string;
  href: keyof QuickLinksRootStackParamList;
  price: string;
  date: string;
  code?: string;
  time?: string;
};

export interface getHelp {
  icon: IconTypes;
  title: string;
  desc: string;
  iconProvider: IconProvider;
  color: string;
}
export interface getHelpDataContact {
  icon: IconTypes;
  title: string;
  iconProvider: IconProvider;
}

// export type paymentHistoryProps = {
//   name: string;
//   href: keyof RootStackParamList;
//   price: string;
//   date: string;
//   code: string;
//   time: string;
// };
export type HousingBillsnProps = {
  name: string;
  price: string;
  color: string;
};

export const quickLinksArray: QuicklinkProps[] = [
  {
    icon: "unlock",
    name: "Gate Access",
    href: "GateAccess",
    iconProvider: "AntDesign",
  },
  {
    icon: "alert-circle",
    name: "Alert",
    href: "Emergency",
    iconProvider: "Feather",
  },
  {
    icon: "chat-question-outline",
    name: "Complaints",
    href: "Message",
    iconProvider: "MaterialCommunityIcons",
  },
  {
    icon: "lightning-bolt-outline",
    name: "Buy Elecricity",
    href: "Electricity",
    iconProvider: "MaterialCommunityIcons",
  },
];



export const recentActivityArray: RecentActivityProps[] = [
  {
    activityIcon: "chat-question-outline",
    activityTag: "Complaint",
    activityTitle: "Water Leak",
    activityDate: "03, May 2023",
    activityAmount: "N20,000",
    iconProvider: "MaterialCommunityIcons",
  },
  {
    activityIcon: "chat-question-outline",
    activityTag: "Complaint",
    activityTitle: "Front Door Fix",
    activityDate: "03, May 2023",
    activityAmount: "N12,000",
    iconProvider: "MaterialCommunityIcons",
  },
  {
    activityIcon: "unlock",
    activityTag: "Gate access request",
    activityTitle: "John David",
    activityDate: "03, May 2023",
    activityAmount: "122ABC",
    iconProvider: "AntDesign",
  },
];



export const HousingBills: QuicklinkProps[] = [
  {
    icon: "unlock",
    name: "Rent",
    href: "GateAccess",
    iconProvider: "AntDesign",
  },
  {
    icon: "alert-circle",
    name: "Security",
    href: "Emergency",
    iconProvider: "Feather",
  },
  {
    icon: "chat-question-outline",
    name: "Estate Dues",
    href: "Message",
    iconProvider: "MaterialCommunityIcons",
  },
]
export const QuickLinkBillsData: QuicklinkProps[] = [
  {
    icon: "zap",
    name: "Buy Electricity",
    href: "Electricity",
    iconProvider: "Feather",
  },
];

export const HousingBillsData: HousingBillsProps[] = [
  {
    bill_type: "Rent",
    status: "ALREADY DUE",
    amount: 2500000,
  },
  {
    bill_type: "Security",
    status: "DUE IN A FEW DAYS",
    amount: 20000,
  },
  {
    bill_type: "Estate Dues",
    status: "DUE IN A FEW DAYS",
    amount: 16000,
  },
  {
    bill_type: "Utilities",
    status: "DUE IN A FEW DAYS",
    amount: 300000,
  },
];

export const transactionData: transactionProps[] = [
  {
    name: "Electricity",
    href: "Electricity",
    price: "-N20,000",
    date: "Jan 01 2023, 11:00AM",
  },
  {
    name: "Wallet funding",
    href: "Electricity",
    price: "+N20,000",
    date: "Jan 01 2023, 11:00AM",
  },
  {
    name: "Electricity",
    href: "Electricity",
    price: "-N20,000",
    date: "Jan 01 2023, 11:00AM",
  },
];
export const HousingBillData: HousingBillsnProps[] = [
  {
    name: "Rent",
    price: "N2,500,000",
    color: "#805566",
  },
  {
    name: "Security",
    price: "N500,000",
    color: "#D4CAA6",
  },
  {
    name: "Estate Dues",
    price: "N16,000",
    color: "#C4A485",
  },
  {
    name: "Utilities",
    price: "N300,000",
    color: "#FEF2C6",
  },
];

export const paymentHistoryData: transactionProps[] = [
  {
    name: "Electricity",
    href: "Electricity",
    price: "-N20,000",
    date: "30.02.2023",
    code: "CS-123456",
    time: "10:00am",
  },
  {
    name: "Wallet funding",
    href: "Electricity",
    price: "-N20,000",
    date: "30.02.2023",
    code: "CS-123456",
    time: "10:00am",
  },
  {
    name: "Electricity",
    href: "Electricity",
    price: "-N20,000",
    date: "30.02.2023",
    code: "CS-123456",
    time: "10:00am",
  },
  {
    name: "Wallet funding",
    href: "Electricity",
    price: "-N20,000",
    date: "30.02.2023",
    code: "CS-123456",
    time: "10:00am",
  },
];

export const getHelpData: getHelp[] = [
  {
    icon: "plus-circle-outline",
    title: "Fire Station",
    desc: "Find Nearest Fire Station",
    iconProvider: "MaterialCommunityIcons",
    color: "#FAA08D",
  },
  {
    icon: "shield-cross-outline",
    title: "Police Station",
    desc: "Locate Your Area Police ",
    iconProvider: "MaterialCommunityIcons",
    color: "#A0808C",
  },
  {
    icon: "medical-bag",
    title: "Medical Assistance",
    desc: "Find Nearest Hospitals",
    iconProvider: "MaterialCommunityIcons",
    color: "#FCDE71",
  },
];
export const getHelpDataContact: getHelpDataContact[] = [
  {
    icon: "phone",
    title: "Call your security",
    iconProvider: "Feather",
  },
  {
    icon: "copy",
    title: "Call your property manager",
    iconProvider: "Feather",
  },
];
