import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import {Button, ButtonGroup} from "@nextui-org/button";
function ApplicationForm() {
    return (
        <div>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center">
                    <span className="text-yellow-500">Giving Best Options For You</span>
                    <h2 className="text-4xl font-bold py-3">Application Form</h2>
                    <form className="flex flex-wrap justify-center">
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            <Input type="text" label="Name" />
                            {/* <input type="text" placeholder="Your Name" className="w-full p-3 my-2" /> */}
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            {/* <input type="text" placeholder="Your Age" className="w-full p-3 my-2" /> */}
                            <Input type="text" label="Age" />
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            {/* <input type="text" placeholder="Your Gender" className="w-full p-3 my-2" /> */}
                            <Input type="text" label="Gender" />
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            {/* <input type="text" placeholder="Your Profession" className="w-full p-3 my-2" /> */}
                            <Input type="text" label="Profession" />
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            <Select
                                label="Choose Your Plan"
                                className="w-full"
                            >
                                <SelectItem>
                                    Weekly Plan
                                </SelectItem>
                                <SelectItem>
                                    Monthly Plan
                                </SelectItem>
                                <SelectItem>
                                    Quarterly Plan
                                </SelectItem>
                            </Select>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-2">
                            <Select
                                label="Choose your problem"
                                className="w-full"
                            >
                                <SelectItem>
                                    I am sick
                                </SelectItem>
                                <SelectItem>
                                    I am fine
                                </SelectItem>
                                <SelectItem>
                                    No problem
                                </SelectItem>
                            </Select>
                        </div>
                    </form>
                    <div className="w-full text-center py-4">
                        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                            Button
                        </Button>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ApplicationForm;