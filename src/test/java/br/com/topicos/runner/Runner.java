package br.com.topicos.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags = "@ct001", 
features = "src/test/resources/features/", 
glue = {"br.com.topicos.steps" }, 
monochrome = true, 
dryRun = false, 
plugin = { "pretty", "html:target/cucumber" })
public class Runner {

}
