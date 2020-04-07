import { hierarchy } from "d3";

import { collapse } from "../../utils/treeChartD3Utilities";

import { CanadaOrgChart } from "./CanadaOrgChart";

// Select a few org charts for illustrative purposes
const ESDC = hierarchy(CanadaOrgChart["Employment and Social Development Canada"][0]);
// ESDC.children.forEach(collapse);
const FinanceCanada = hierarchy(CanadaOrgChart["Finance Canada"][0]);
// FinanceCanada.children.forEach(collapse);
const StatisticsCanada = hierarchy(CanadaOrgChart["Statistics Canada"][0]);
// StatisticsCanada.children.forEach(collapse);
const ECCC = hierarchy(CanadaOrgChart["Environment and Climate Change Canada"][0]);
// ECCC.children.forEach(collapse);
const FederalCourt = hierarchy(CanadaOrgChart["Environment and Climate Change Canada"][0]);
// FederalCourt.children.forEach(collapse);
const HealthCanada = hierarchy(CanadaOrgChart["Health Canada"][0]);
// HealthCanada.children.forEach(collapse);
const Agriculture = hierarchy(CanadaOrgChart["Agriculture and Agri-Food Canada"][0]);
// Agriculture.children.forEach(collapse);
const CRA = hierarchy(CanadaOrgChart["Canada Revenue Agency"][0]);
// CRA.children.forEach(collapse);

export {ESDC, FinanceCanada, StatisticsCanada, ECCC, FederalCourt, HealthCanada, Agriculture, CRA,};