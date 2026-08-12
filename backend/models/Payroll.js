import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    month: {
      type: Date,
      required: true,
    },
    baseSalary: Number,
    deductions: Number,
    bonuses: Number,
    netSalary: Number,
    status: {
      type: String,
      enum: ['pending', 'processed', 'paid'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Payroll = mongoose.model('Payroll', payrollSchema);
export default Payroll;
