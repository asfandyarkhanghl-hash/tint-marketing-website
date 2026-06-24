'use client'

import { useState, useMemo } from 'react'
import { DollarSign, Users, TrendingUp, Percent, Calculator, ArrowDown, BarChart3, Target, Minus, Wallet, PiggyBank } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Slider({ label, value, onChange, min, max, step, prefix = '', suffix = '', icon: Icon, description }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number
  prefix?: string; suffix?: string; icon: typeof DollarSign; description: string
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-text">{label}</label>
            <span className="font-display text-2xl font-bold text-accent">{prefix}{value.toLocaleString()}{suffix}</span>
          </div>
          <p className="text-xs text-muted mt-0.5">{description}</p>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
      />
      <div className="flex justify-between text-[10px] text-muted mt-1">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  )
}

function ResultCard({ label, value, prefix = '', suffix = '', color = 'text-text', sub, icon: Icon }: {
  label: string; value: string; prefix?: string; suffix?: string; color?: string; sub?: string; icon: typeof DollarSign
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
      <Icon className={`w-5 h-5 mx-auto mb-2 ${color === 'text-accent' ? 'text-accent' : color === 'text-green-600' ? 'text-green-600' : color === 'text-red' ? 'text-red' : 'text-slate-500'}`} />
      <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">{label}</p>
      <p className={`font-display text-3xl md:text-4xl font-bold ${color}`}>{prefix}{value}{suffix}</p>
      {sub && <p className="text-xs text-muted mt-1">{sub}</p>}
    </div>
  )
}

export default function ProfitCalculator() {
  const [avgServiceCharge, setAvgServiceCharge] = useState(450)
  const [tintMaterialCost, setTintMaterialCost] = useState(45)
  const [laborCostPerJob, setLaborCostPerJob] = useState(50)
  const [leadsPerMonth, setLeadsPerMonth] = useState(35)
  const [bookingRate, setBookingRate] = useState(50)
  const [marketingBudget, setMarketingBudget] = useState(1000)
  const [monthlyOverhead, setMonthlyOverhead] = useState(3000)

  const results = useMemo(() => {
    const jobsPerMonth = Math.round(leadsPerMonth * (bookingRate / 100))
    const grossRevenuePerJob = avgServiceCharge
    const costPerJob = tintMaterialCost + laborCostPerJob
    const profitPerJob = grossRevenuePerJob - costPerJob
    const totalRevenue = jobsPerMonth * grossRevenuePerJob
    const totalMaterialCost = jobsPerMonth * tintMaterialCost
    const totalLaborCost = jobsPerMonth * laborCostPerJob
    const totalJobCosts = totalMaterialCost + totalLaborCost
    const grossProfit = totalRevenue - totalJobCosts
    const netProfit = grossProfit - marketingBudget - monthlyOverhead
    const costPerLead = leadsPerMonth > 0 ? Math.round(marketingBudget / leadsPerMonth) : 0
    const costPerBookedJob = jobsPerMonth > 0 ? Math.round(marketingBudget / jobsPerMonth) : 0
    const roi = marketingBudget > 0 ? Math.round(((totalRevenue - marketingBudget) / marketingBudget) * 100) : 0
    const roiMultiple = marketingBudget > 0 ? (totalRevenue / marketingBudget).toFixed(1) : '0'
    const annualRevenue = totalRevenue * 12
    const annualNetProfit = netProfit * 12
    const profitMargin = totalRevenue > 0 ? Math.round((netProfit / totalRevenue) * 100) : 0

    return {
      jobsPerMonth,
      profitPerJob,
      totalRevenue,
      totalMaterialCost,
      totalLaborCost,
      totalJobCosts,
      grossProfit,
      netProfit,
      costPerLead,
      costPerBookedJob,
      roi,
      roiMultiple,
      annualRevenue,
      annualNetProfit,
      profitMargin,
    }
  }, [avgServiceCharge, tintMaterialCost, laborCostPerJob, leadsPerMonth, bookingRate, marketingBudget, monthlyOverhead])

  return (
    <div className="space-y-10">
      {/* Input Section */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-2">Your Numbers</h2>
        <p className="text-muted text-sm mb-6">Adjust the sliders to match your shop. We have pre-filled with industry averages.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Slider
            label="Avg. Service Charge"
            value={avgServiceCharge}
            onChange={setAvgServiceCharge}
            min={150} max={1200} step={25}
            prefix="$" icon={DollarSign}
            description="What you charge the customer per tint job"
          />
          <Slider
            label="Tint Material Cost"
            value={tintMaterialCost}
            onChange={setTintMaterialCost}
            min={10} max={150} step={5}
            prefix="$" icon={Minus}
            description="Film cost per job (ceramic, carbon, etc.)"
          />
          <Slider
            label="Labor Cost Per Job"
            value={laborCostPerJob}
            onChange={setLaborCostPerJob}
            min={0} max={200} step={10}
            prefix="$" icon={Minus}
            description="Installer pay per job (or $0 if you do it)"
          />
          <Slider
            label="Leads Per Month"
            value={leadsPerMonth}
            onChange={setLeadsPerMonth}
            min={5} max={100} step={1}
            suffix="" icon={Users}
            description="Calls, forms, and chats from marketing"
          />
          <Slider
            label="Booking Rate"
            value={bookingRate}
            onChange={setBookingRate}
            min={20} max={80} step={5}
            suffix="%" icon={Percent}
            description="% of leads that book an appointment"
          />
          <Slider
            label="Monthly Ad Spend"
            value={marketingBudget}
            onChange={setMarketingBudget}
            min={0} max={5000} step={100}
            prefix="$" icon={Target}
            description="Google Ads + Meta Ads budget"
          />
          <div className="md:col-span-2">
            <Slider
              label="Monthly Overhead"
              value={monthlyOverhead}
              onChange={setMonthlyOverhead}
              min={500} max={15000} step={250}
              prefix="$" icon={Wallet}
              description="Rent, utilities, insurance, software, etc."
            />
          </div>
        </div>
      </div>

      {/* Breakdown Arrow */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-accent animate-bounce" />
        </div>
      </div>

      {/* Results Section */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-2">Your Projected Results</h2>
        <p className="text-muted text-sm mb-6">Based on your inputs, here is what your shop should be generating.</p>

        {/* Primary Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <ResultCard
            label="Monthly Revenue"
            value={results.totalRevenue.toLocaleString()}
            prefix="$"
            color="text-accent"
            icon={DollarSign}
            sub={`${results.jobsPerMonth} jobs × $${avgServiceCharge}`}
          />
          <ResultCard
            label="Monthly Net Profit"
            value={results.netProfit.toLocaleString()}
            prefix="$"
            color={results.netProfit > 0 ? 'text-green-600' : 'text-red'}
            icon={PiggyBank}
            sub="After all costs"
          />
          <ResultCard
            label="Marketing ROI"
            value={`${results.roiMultiple}x`}
            color="text-accent"
            icon={TrendingUp}
            sub={`$1 in → $${results.roiMultiple} back`}
          />
          <ResultCard
            label="Profit Margin"
            value={`${results.profitMargin}`}
            suffix="%"
            color={results.profitMargin > 30 ? 'text-green-600' : results.profitMargin > 15 ? 'text-accent' : 'text-red'}
            icon={BarChart3}
            sub={results.profitMargin > 30 ? 'Healthy' : results.profitMargin > 15 ? 'Average' : 'Needs work'}
          />
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent" />
            Full Profit Breakdown
          </h3>

          <div className="space-y-3">
            {/* Revenue */}
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
              <div>
                <p className="font-semibold text-text text-sm">Gross Revenue</p>
                <p className="text-xs text-muted">{results.jobsPerMonth} booked jobs × ${avgServiceCharge} avg. charge</p>
              </div>
              <p className="font-display text-xl font-bold text-text">${results.totalRevenue.toLocaleString()}</p>
            </div>

            {/* Material Costs */}
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
              <div>
                <p className="font-semibold text-red text-sm">− Material Costs</p>
                <p className="text-xs text-muted">{results.jobsPerMonth} jobs × ${tintMaterialCost} per job</p>
              </div>
              <p className="font-display text-xl font-bold text-red">−${results.totalMaterialCost.toLocaleString()}</p>
            </div>

            {/* Labor Costs */}
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
              <div>
                <p className="font-semibold text-red text-sm">− Labor Costs</p>
                <p className="text-xs text-muted">{results.jobsPerMonth} jobs × ${laborCostPerJob} per job</p>
              </div>
              <p className="font-display text-xl font-bold text-red">−${results.totalLaborCost.toLocaleString()}</p>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
              <div>
                <p className="font-semibold text-red text-sm">− Marketing Budget</p>
                <p className="text-xs text-muted">Google Ads + Meta Ads spend</p>
              </div>
              <p className="font-display text-xl font-bold text-red">−${marketingBudget.toLocaleString()}</p>
            </div>

            {/* Overhead */}
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
              <div>
                <p className="font-semibold text-red text-sm">− Shop Overhead</p>
                <p className="text-xs text-muted">Rent, utilities, insurance, software</p>
              </div>
              <p className="font-display text-xl font-bold text-red">−${monthlyOverhead.toLocaleString()}</p>
            </div>

            {/* Net Profit */}
            <div className="flex items-center justify-between py-4 bg-white rounded-xl px-4 mt-4 border-2 border-accent/20">
              <div>
                <p className="font-bold text-text text-base">Net Profit (Monthly)</p>
                <p className="text-xs text-muted">What you actually take home</p>
              </div>
              <p className={`font-display text-3xl font-bold ${results.netProfit > 0 ? 'text-green-600' : 'text-red'}`}>
                ${results.netProfit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Marketing Efficiency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Cost Per Lead</p>
            <p className="font-display text-3xl font-bold text-accent">${results.costPerLead}</p>
            <p className="text-xs text-muted mt-1">{results.costPerLead <= 15 ? 'Excellent' : results.costPerLead <= 25 ? 'Good' : 'High — optimize ads'}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Cost Per Booked Job</p>
            <p className="font-display text-3xl font-bold text-accent">${results.costPerBookedJob}</p>
            <p className="text-xs text-muted mt-1">{results.costPerBookedJob <= 40 ? 'Excellent' : results.costPerBookedJob <= 70 ? 'Good' : 'Review funnel'}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Profit Per Job</p>
            <p className="font-display text-3xl font-bold text-green-600">${results.profitPerJob}</p>
            <p className="text-xs text-muted mt-1">After materials & labor</p>
          </div>
        </div>

        {/* Annual Projection */}
        <div className="mt-6 bg-accent/5 border border-accent/15 rounded-2xl p-8 text-center">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Annual Projection</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Annual Revenue</p>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent">${results.annualRevenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Annual Net Profit</p>
              <p className={`font-display text-4xl md:text-5xl font-bold ${results.annualNetProfit > 0 ? 'text-green-600' : 'text-red'}`}>
                ${results.annualNetProfit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted text-sm mb-4">
            Not hitting these numbers yet? We guarantee 30–40 leads/month for tint shops.
          </p>
          <Link href="/free-trial" className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-accent/20">
            Get My 30+ Leads/Month <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
