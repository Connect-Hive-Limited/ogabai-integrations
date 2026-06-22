export const packageSchema = {
  getPackage: (query: string) => `
    query getPackage($productPackage: ProductPackageInput!, $template: Boolean) {
      getPackage(productPackage: $productPackage, template: $template) {
        ${query}
      }
    }
  `,
  getPackages: (query: string) => `
    query getPackages($productPackage: ProductPackageInput, $packageIds: [String], $search: String, $template: Boolean, $shouldGetFromAllStores: Boolean, $limit: Int, $skip: Int) {
      getPackages(productPackage: $productPackage, packageIds: $packageIds, search: $search, template: $template, shouldGetFromAllStores: $shouldGetFromAllStores, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,
  addPackage: (query: string) => `
    mutation addPackage($productPackage: ProductPackageInput!, $template: Boolean) {
      addPackage(productPackage: $productPackage, template: $template) {
        ${query}
      }
    }
  `,
  addPackages: (query: string) => `
    mutation addPackages($productPackages: [ProductPackagesInput]!, $template: Boolean) {
      addPackages(productPackages: $productPackages, template: $template) {
        ${query}
      }
    }
  `,
  updatePackage: (query: string) => `
    mutation updatePackage($packageId: String!, $productPackage: ProductPackageInput!, $template: Boolean) {
      updatePackage(packageId: $packageId, productPackage: $productPackage, template: $template) {
        ${query}
      }
    }
  `,
  updatePackages: (query: string) => `
    mutation updatePackages($packages: [PackagesInput]) {
      updatePackages(packages: $packages) {
        ${query}
      }
    }
  `,

  removePackage: (query: string) => `
    mutation removePackage($packageId: String!, $template: Boolean) {
      removePackage(packageId: $packageId, template: $template) {
        ${query}
      }
    }
  `
}
