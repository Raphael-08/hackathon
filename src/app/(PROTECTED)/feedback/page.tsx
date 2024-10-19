import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Submit Feedback</h1>
      <Card>
        <CardHeader>
          <CardTitle>Course and Teacher Feedback</CardTitle>
          <CardDescription>Your feedback helps improve the quality of education</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course">Select Course</Label>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                <SelectItem value="math201">MATH201: Linear Algebra</SelectItem>
                <SelectItem value="phy301">PHY301: Quantum Mechanics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="teacher">Select Teacher</Label>
            <Select>
              <SelectTrigger id="teacher">
                <SelectValue placeholder="Choose a teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jsmith">Dr. Jane Smith</SelectItem>
                <SelectItem value="jdoe">Prof. John Doe</SelectItem>
                <SelectItem value="agreen">Dr. Alice Green</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Teaching Quality</Label>
            <RadioGroup defaultValue="3">
              <div className="flex justify-between">
                <RadioGroupItem value="1" id="r1" />
                <RadioGroupItem value="2" id="r2" />
                <RadioGroupItem value="3" id="r3" />
                <RadioGroupItem value="4" id="r4" />
                <RadioGroupItem value="5" id="r5" />
              </div>
              <div className="flex justify-between">
                <Label htmlFor="r1">Poor</Label>
                <Label htmlFor="r3">Average</Label>
                <Label htmlFor="r5">Excellent</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Course Content</Label>
            <RadioGroup defaultValue="3">
              <div className="flex justify-between">
                <RadioGroupItem value="1" id="c1" />
                <RadioGroupItem value="2" id="c2" />
                <RadioGroupItem value="3" id="c3" />
                <RadioGroupItem value="4" id="c4" />
                <RadioGroupItem value="5" id="c5" />
              </div>
              <div className="flex justify-between">
                <Label htmlFor="c1">Poor</Label>
                <Label htmlFor="c3">Average</Label>
                <Label htmlFor="c5">Excellent</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Additional Comments</Label>
            <Textarea id="comments" placeholder="Share your thoughts about the course and teacher" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit Feedback</Button>
        </CardFooter>
      </Card>
    </div>
  )
}